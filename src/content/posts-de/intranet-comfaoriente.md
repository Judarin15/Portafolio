---
title: "Schul-Intranet für das Gimnasio Campestre Comfaoriente"
published: 2026-07-14
description: "Wie ich in meinem SENA-Praktikum die Plattform entwickelt habe, die die schulischen und administrativen Informationen einer Schule in Cúcuta bündelt."
cover: "/assets/projects/intranet-horarios.webp"
pinned: true
tags: [React, TypeScript, Firebase, Google Apps Script, Tailwind CSS]
category: "Projekte"
draft: false
---

In meinem SENA-Praktikum (Januar bis Juli 2026) am **Gimnasio Campestre Comfaoriente** habe ich das Intranet der Schule entwickelt. Heute nutzen es die Schulleitung, die pädagogische Koordination und die Lehrkräfte.

- **Repository:** [github.com/Judarin15/Intranet](https://github.com/Judarin15/Intranet)
- **Technologien:** React, TypeScript, Vite, Tailwind CSS, Firebase (Authentication, Firestore, Hosting) und Google Apps Script

## Das Problem

Die Informationen der Schule waren über Google-Drive-Ordner, einzelne Dateien und Papierdokumente verteilt. Einen Lehrplan, die Akte eines Schülers oder den Stundenplan einer Lehrkraft zu finden, kostete Zeit, und niemand wusste, wie vollständig die Dokumentation war.

## Die Lösung

Eine Webanwendung mit einem einzigen Zugang und 12 Modulen:

- **Schuldokumente:** pädagogisches Konzept, Bewertungssystem, Schulordnung, Protokolle und Beschlüsse.
- **Lehrpläne** für alle 13 Fächer.
- **Portfolios aller 47 Lehrkräfte**, mit Suche.
- **Akten aller 840 Schülerinnen und Schüler**, nach Klassenstufe sortiert.
- **Schulkalender**, schulweit und persönlich, mit PDF-Export.
- **Stundenplan** nach Lehrkraft und nach Klasse.
- Schülerwohl, Qualitätsmanagement (ISO 9001:2015), Schulsymbole und außerschulische Aktivitäten.

## Was mir am meisten beigebracht hat

**Zugang und Sicherheit.** Die Anmeldung erfolgt mit Google und akzeptiert nur die Domains der Schule oder freigegebene Adressen. Es gibt Rollen für Administration und Lehrkräfte, eine automatische Abmeldung nach einer Stunde Inaktivität und ein Audit-Protokoll.

**Admin-Panel.** Die Schulleitung bearbeitet die Inhalte aller 12 Module ohne Code, mit Rückgängig, Wiederherstellen und Versionsverlauf. Sie sieht außerdem in Echtzeit, wer angemeldet ist, und verwaltet die Zugriffsrechte.

**Stundenplanmodul.** Es importiert den kompletten Jahresplan (882 Unterrichtsstunden, 63 Lehrkräfte und 39 Klassen), erkennt Überschneidungen, verwaltet Abwesenheiten und erzeugt die offiziellen Vertretungs- und Lehrauftragsformulare als PDF.

**Berichte mit Google Drive.** Mit Google Apps Script liest das Intranet Drive-Ordner in Echtzeit und berechnet die Vollständigkeit der Dokumentation nach Fach, Klassenstufe und Lehrkraft.

**Dokumentation.** Ich habe ein Benutzerhandbuch mit Screenshots zu jedem Ablauf übergeben, damit die Schule die Plattform nutzen und pflegen kann.

## Screenshots

![Google-Anmeldung nur für Schulkonten](/assets/projects/intranet/login.webp)

![Stundenplanmodul](/assets/projects/intranet-horarios.webp)

![Schulkalender, schulweit und persönlich](/assets/projects/intranet/calendario.webp)

![Lehrpläne der 13 Fächer](/assets/projects/intranet/planes-de-area.webp)

![Statistischer Bericht zu den Portfolios der Lehrkräfte](/assets/projects/intranet/reporte-portafolios.webp)

![Außerschulische Aktivitäten nach Standort](/assets/projects/intranet/centros-de-interes.webp)
