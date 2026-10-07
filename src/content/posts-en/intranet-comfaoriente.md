---
title: School Intranet for Gimnasio Campestre Comfaoriente
published: 2026-07-14
description: "How I built, during my SENA internship, the platform that centralizes the academic and administrative information of a school in Cúcuta."
cover: "/assets/projects/intranet-horarios.webp"
pinned: true
tags: [React, TypeScript, Firebase, Google Apps Script, Tailwind CSS]
category: Projects
draft: false
---

During my SENA internship (January to July 2026) at **Gimnasio Campestre Comfaoriente**, I built the school's intranet. Today it is used by the principal's office, the academic coordination team, and the teachers.

- **Repository:** [github.com/Judarin15/Intranet](https://github.com/Judarin15/Intranet)
- **Tech stack:** React, TypeScript, Vite, Tailwind CSS, Firebase (Authentication, Firestore, Hosting), and Google Apps Script

## The problem

The school's information was scattered across Google Drive folders, loose files, and paper documents. Finding a curriculum plan, a student's record, or a teacher's timetable took time, and there was no way to know how complete the documentation was.

## The solution

A web application with a single point of access and 12 modules:

- **Institutional documents:** educational project, evaluation system, code of conduct, minutes, and resolutions.
- **Curriculum plans** for all 13 subjects.
- **Teacher portfolios** for all 47 teachers, with search.
- **Records for all 840 students**, organized by grade.
- **Academic calendar**, both institutional and personal, with PDF export.
- **Academic timetable** by teacher and by class.
- Student wellbeing, quality management (ISO 9001:2015), school symbols, and extracurricular activities.

## What taught me the most

**Access and security.** Sign-in uses Google and only accepts the school's domains or authorized emails. There are admin and teacher roles, automatic sign-out after one hour of inactivity, and an audit log.

**Admin panel.** The principal's office edits the content of all 12 modules without touching code, with undo, redo, and version history. They can also see who is online in real time and manage access permissions.

**Timetable module.** It imports the full yearly schedule (882 classes, 63 teachers, and 39 classes), detects scheduling conflicts, manages teacher absences, and generates the official substitute-teacher and teaching-load forms as PDFs.

**Reports connected to Google Drive.** Using Google Apps Script, the intranet reads Drive folders in real time and calculates documentation compliance by subject, by grade, and by teacher.

**Documentation.** I delivered a user manual with screenshots of every process so the school can use and maintain the platform.

## Screenshots

![Google sign-in restricted to institutional accounts](/assets/projects/intranet/login.webp)

![Academic timetable module](/assets/projects/intranet-horarios.webp)

![Institutional and personal academic calendar](/assets/projects/intranet/calendario.webp)

![Curriculum plans for the 13 subjects](/assets/projects/intranet/planes-de-area.webp)

![Statistical report on teacher portfolio compliance](/assets/projects/intranet/reporte-portafolios.webp)

![Extracurricular activities by campus](/assets/projects/intranet/centros-de-interes.webp)
