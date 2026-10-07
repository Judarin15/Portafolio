/**
 * Servicio de inicio de sesión con GitHub para Decap CMS.
 *
 * Decap CMS abre una ventana en /auth; este Worker la envía a GitHub,
 * GitHub vuelve a /callback con un código, el Worker lo cambia por un
 * token y se lo entrega al panel /admin del portafolio.
 *
 * Variables (configurar con `wrangler secret put` / wrangler.toml):
 *   GITHUB_CLIENT_ID      ID de la OAuth App de GitHub
 *   GITHUB_CLIENT_SECRET  Secreto de la OAuth App (secreto)
 *   ALLOWED_ORIGIN        URL del portafolio, ej. https://tu-proyecto.web.app
 */

const STATE_COOKIE = "decap_oauth_state";

export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        if (url.pathname === "/auth") {
            return startLogin(url, env);
        }
        if (url.pathname === "/callback") {
            return finishLogin(request, url, env);
        }
        return new Response("Servicio de inicio de sesión de Decap CMS", { status: 200 });
    },
};

function startLogin(url, env) {
    const state = crypto.randomUUID();
    const github = new URL("https://github.com/login/oauth/authorize");
    github.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
    github.searchParams.set("redirect_uri", `${url.origin}/callback`);
    github.searchParams.set("scope", url.searchParams.get("scope") || "repo,user");
    github.searchParams.set("state", state);

    return new Response(null, {
        status: 302,
        headers: {
            Location: github.toString(),
            "Set-Cookie": `${STATE_COOKIE}=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
        },
    });
}

async function finishLogin(request, url, env) {
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");
    const cookieState = readCookie(request.headers.get("Cookie") || "", STATE_COOKIE);

    if (!code || !state || state !== cookieState) {
        return reply(env, "error", { error: "Solicitud no válida. Vuelve a intentarlo." });
    }

    const response = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "User-Agent": "decap-cms-oauth-worker",
        },
        body: JSON.stringify({
            client_id: env.GITHUB_CLIENT_ID,
            client_secret: env.GITHUB_CLIENT_SECRET,
            code,
            redirect_uri: `${url.origin}/callback`,
        }),
    });
    const data = await response.json();

    if (!data.access_token) {
        return reply(env, "error", { error: data.error_description || "GitHub no entregó el token." });
    }
    return reply(env, "success", { token: data.access_token, provider: "github" });
}

// Página que devuelve el resultado a la ventana del CMS con el protocolo de Decap
function reply(env, status, content) {
    const message = `authorization:github:${status}:${JSON.stringify(content)}`;
    const allowedOrigin = (env.ALLOWED_ORIGIN || "").replace(/\/$/, "");
    const html = `<!doctype html><html><body><script>
(function () {
    var allowed = ${JSON.stringify(allowedOrigin)};
    function receive(event) {
        if (allowed && event.origin !== allowed) return;
        window.opener.postMessage(${JSON.stringify(message)}, event.origin);
        window.removeEventListener("message", receive, false);
    }
    window.addEventListener("message", receive, false);
    window.opener.postMessage("authorizing:github", "*");
})();
</script><p>Puedes cerrar esta ventana.</p></body></html>`;

    return new Response(html, {
        status: 200,
        headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Set-Cookie": `${STATE_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`,
        },
    });
}

function readCookie(header, name) {
    const match = header.split(";").map((c) => c.trim()).find((c) => c.startsWith(`${name}=`));
    return match ? match.slice(name.length + 1) : "";
}
