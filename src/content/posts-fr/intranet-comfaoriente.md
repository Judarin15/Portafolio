---
title: "Intranet scolaire pour le Gimnasio Campestre Comfaoriente"
published: 2026-07-14
description: "Comment j'ai développé, pendant mon stage au SENA, la plateforme qui centralise les informations pédagogiques et administratives d'une école de Cúcuta."
cover: "/assets/projects/intranet-horarios.webp"
pinned: true
tags: [React, TypeScript, Firebase, Google Apps Script, Tailwind CSS]
category: "Projets"
draft: false
---

Pendant mon stage au SENA (de janvier à juillet 2026) au **Gimnasio Campestre Comfaoriente**, j'ai développé l'intranet de l'école. Aujourd'hui, la direction, la coordination pédagogique et les enseignants l'utilisent.

- **Dépôt :** [github.com/Judarin15/Intranet](https://github.com/Judarin15/Intranet)
- **Technologies :** React, TypeScript, Vite, Tailwind CSS, Firebase (Authentication, Firestore, Hosting) et Google Apps Script

## Le problème

Les informations de l'école étaient dispersées entre des dossiers Google Drive, des fichiers isolés et des documents papier. Trouver un programme, le dossier d'un élève ou l'emploi du temps d'un enseignant prenait du temps, et il était impossible de savoir si la documentation était complète.

## La solution

Une application web avec un point d'accès unique et 12 modules :

- **Documents institutionnels :** projet éducatif, système d'évaluation, règlement intérieur, procès-verbaux et décisions.
- **Programmes** des 13 matières.
- **Portfolios des 47 enseignants**, avec recherche.
- **Dossiers des 840 élèves**, classés par niveau.
- **Calendrier scolaire** institutionnel et personnel, avec export PDF.
- **Emploi du temps** par enseignant et par classe.
- Bien-être des élèves, gestion de la qualité (ISO 9001:2015), symboles de l'école et activités périscolaires.

## Ce qui m'a le plus appris

**Accès et sécurité.** La connexion se fait avec Google et n'accepte que les domaines de l'école ou des adresses autorisées. Il existe des rôles administrateur et enseignant, une déconnexion automatique après une heure d'inactivité et un journal d'audit.

**Panneau d'administration.** La direction modifie le contenu des 12 modules sans toucher au code, avec annulation, rétablissement et historique des versions. Elle voit aussi en temps réel qui est connecté et gère les autorisations d'accès.

**Module d'emploi du temps.** Il importe le planning complet de l'année (882 cours, 63 enseignants et 39 classes), détecte les conflits d'horaire, gère les absences des enseignants et génère en PDF les formulaires officiels de remplacement et de répartition des heures.

**Rapports connectés à Google Drive.** Grâce à Google Apps Script, l'intranet lit les dossiers Drive en temps réel et calcule la conformité documentaire par matière, par niveau et par enseignant.

**Documentation.** J'ai livré un manuel d'utilisation illustré de captures de chaque procédure pour que l'école puisse utiliser et maintenir la plateforme.

## Captures d'écran

![Connexion Google réservée aux comptes de l'établissement](/assets/projects/intranet/login.webp)

![Module d'emploi du temps](/assets/projects/intranet-horarios.webp)

![Calendrier scolaire institutionnel et personnel](/assets/projects/intranet/calendario.webp)

![Programmes des 13 matières](/assets/projects/intranet/planes-de-area.webp)

![Rapport statistique sur les portfolios des enseignants](/assets/projects/intranet/reporte-portafolios.webp)

![Activités périscolaires par site](/assets/projects/intranet/centros-de-interes.webp)
