---
title: Intranet institucional para el Gimnasio Campestre Comfaoriente
published: 2026-07-14
description: "Cómo desarrollé, durante mi práctica del SENA, la plataforma que centraliza la información académica y administrativa de un colegio de Cúcuta."
cover: "/assets/projects/intranet-horarios.webp"
pinned: true
tags: [React, TypeScript, Firebase, Google Apps Script, Tailwind CSS]
category: Proyectos
draft: false
---

Durante mi etapa práctica del SENA (enero a julio de 2026) en el **Gimnasio Campestre Comfaoriente** desarrollé la intranet institucional del colegio. Hoy la usan la rectoría, la coordinación académica y los docentes.

- **Repositorio:** [github.com/Judarin15/Intranet](https://github.com/Judarin15/Intranet)
- **Tecnologías:** React, TypeScript, Vite, Tailwind CSS, Firebase (Authentication, Firestore, Hosting) y Google Apps Script

## El problema

La información del colegio estaba repartida entre carpetas de Google Drive, archivos sueltos y documentos físicos. Encontrar un plan de área, la hoja de vida de un estudiante o el horario de un docente tomaba tiempo, y no había forma de saber qué tan completa estaba la documentación.

## La solución

Una aplicación web con un solo punto de acceso y 12 módulos:

- **Documentos institucionales:** PEI, SIEE, manual de convivencia, actas y resoluciones.
- **Planes de área** de las 13 asignaturas.
- **Portafolio docente** de los 47 profesores, con buscador.
- **Hojas de vida de los 840 estudiantes**, organizadas por grado.
- **Calendario académico** institucional y personal, con exportación a PDF.
- **Horario académico** por docente y por curso.
- Bienestar estudiantil, gestiones de calidad (ISO 9001:2015), símbolos institucionales y actividades complementarias.

## Lo que más me enseñó

**Acceso y seguridad.** El inicio de sesión es con Google y solo admite los dominios institucionales o correos autorizados. Hay roles de administrador y docente, cierre de sesión automático tras una hora de inactividad e historial de auditoría.

**Panel de administración.** La rectoría edita el contenido de los 12 módulos sin tocar código, con deshacer, rehacer e historial de versiones. También ve en tiempo real quién está conectado y administra los permisos de acceso.

**Módulo de horarios.** Importa la programación completa del año (882 clases, 63 docentes y 39 cursos), detecta cruces de horario, gestiona las ausencias de docentes y genera en PDF los formatos oficiales de reemplazo docente y de asignación académica.

**Reportes conectados a Google Drive.** Con Google Apps Script, la intranet lee en tiempo real las carpetas de Drive y calcula el cumplimiento documental por área, por grado y por docente.

**Documentación.** Entregué un manual de usuario con capturas de cada proceso para que el colegio pueda usar y mantener la plataforma.

## Capturas

![Inicio de sesión con Google restringido a cuentas institucionales](/assets/projects/intranet/login.webp)

![Módulo de horario académico](/assets/projects/intranet-horarios.webp)

![Calendario académico institucional y personal](/assets/projects/intranet/calendario.webp)

![Planes de área de las 13 asignaturas](/assets/projects/intranet/planes-de-area.webp)

![Reporte estadístico de cumplimiento de portafolios docentes](/assets/projects/intranet/reporte-portafolios.webp)

![Centros de interés por sede](/assets/projects/intranet/centros-de-interes.webp)
