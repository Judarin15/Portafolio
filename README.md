# Portafolio — Julián David Rincón Andrade

Portafolio personal de desarrollador web, construido con [Astro](https://astro.build) a partir de la plantilla [Twilight](https://github.com/Spr-Aachen/Twilight).

## Dónde editar cada cosa

| Qué | Archivo |
|---|---|
| Nombre, menú, enlaces, colores, anuncio | `src/config.ts` |
| Idiomas | 10 idiomas: español en `/` y `en`, `fr`, `de`, `ru`, `zh`, `ja`, `ko`, `tr`, `id` en `/<código>/`. Las traducciones viven en `scripts/i18n-source/` (contenido) y `src/i18n/languages/` (interfaz); `python3 scripts/i18n-source/generate.py` las copia a los JSON, a `src/content/posts-<código>/` y a `about-<código>.md` |
| Proyectos | `src/data/projects/*.json` |
| Habilidades | `src/data/skills/*.json` |
| Trayectoria (educación y experiencia) | `src/data/timeline/*.json` |
| Página "Sobre mí" | `src/content/spec/about.md` |
| Publicaciones de la página de inicio | `src/content/posts/` |
| Foto de perfil | la de GitHub (`avatar` en `src/config.ts`) |
| Hoja de vida descargable | `public/cv/CV_Julian_Rincon_Andrade.pdf` |
| Panel de administración (Decap CMS) | `public/admin/` — activación en [`cms-oauth/README.md`](cms-oauth/README.md) |

## Desarrollo

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build
```

## Despliegue en Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase use --add          # elige o crea tu proyecto de Firebase
pnpm build                  # genera el sitio en dist/
firebase deploy --only hosting
```

Después del primer despliegue, cambia `siteURL` en `src/config.ts` por la URL que te dé Firebase (por ejemplo `https://tu-proyecto.web.app/`), vuelve a compilar y despliega otra vez.
