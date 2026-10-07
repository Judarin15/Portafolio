# Activar Decap CMS (panel /admin)

Firebase Hosting solo sirve archivos estáticos, así que el inicio de sesión con GitHub lo hace este pequeño servicio en **Cloudflare Workers** (plan gratuito, sin tarjeta).

## 1. Publicar el Worker

```bash
cd cms-oauth
npx wrangler login
npx wrangler deploy
```

Wrangler te muestra la URL del Worker, por ejemplo `https://portafolio-cms-oauth.tu-subdominio.workers.dev`.

## 2. Crear la OAuth App en GitHub

GitHub → **Settings → Developer settings → OAuth Apps → New OAuth App**:

- **Homepage URL:** la URL de tu portafolio (ej. `https://tu-proyecto.web.app`)
- **Authorization callback URL:** `https://portafolio-cms-oauth.tu-subdominio.workers.dev/callback`

Copia el **Client ID** y genera un **Client Secret**.

## 3. Configurar el Worker

1. En `wrangler.toml`, pon tu `GITHUB_CLIENT_ID` y en `ALLOWED_ORIGIN` la URL del portafolio (sin `/` al final).
2. Guarda el secreto y vuelve a publicar:

```bash
npx wrangler secret put GITHUB_CLIENT_SECRET
npx wrangler deploy
```

## 4. Apuntar el CMS al Worker

En `public/admin/config.yml`, cambia `base_url` por la URL del Worker. Compila y despliega el portafolio:

```bash
pnpm build
firebase deploy --only hosting
```

Entra a `https://tu-proyecto.web.app/admin/`, inicia sesión con GitHub y edita. Cada cambio se guarda como commit en `main`.

**Importante:** el CMS guarda en GitHub, pero Firebase no se actualiza solo. Después de editar, ejecuta `git pull`, `pnpm build` y `firebase deploy`, o configura la integración de GitHub con Firebase Hosting (`firebase init hosting:github`) para que despliegue automáticamente en cada commit.

## Editar sin internet (opcional)

```bash
npx decap-server    # en una terminal
pnpm dev            # en otra
```

Abre `http://localhost:4321/admin/`. Los cambios se guardan directamente en tus archivos locales.
