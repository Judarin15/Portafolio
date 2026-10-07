---
title: "Intranet sekolah untuk Gimnasio Campestre Comfaoriente"
published: 2026-07-14
description: "Bagaimana saya, selama magang SENA, membangun platform yang memusatkan informasi akademik dan administrasi sebuah sekolah di Cúcuta."
cover: "/assets/projects/intranet-horarios.webp"
pinned: true
tags: [React, TypeScript, Firebase, Google Apps Script, Tailwind CSS]
category: "Proyek"
draft: false
---

Selama magang SENA (Januari hingga Juli 2026) di **Gimnasio Campestre Comfaoriente**, saya membangun intranet sekolah. Kini intranet itu dipakai kepala sekolah, tim koordinasi akademik, dan para guru.

- **Repositori:** [github.com/Judarin15/Intranet](https://github.com/Judarin15/Intranet)
- **Teknologi:** React, TypeScript, Vite, Tailwind CSS, Firebase (Authentication, Firestore, Hosting), dan Google Apps Script

## Masalahnya

Informasi sekolah tersebar di folder Google Drive, berkas lepas, dan dokumen kertas. Mencari rencana pembelajaran, data seorang siswa, atau jadwal seorang guru memakan waktu, dan tidak ada cara untuk mengetahui seberapa lengkap dokumennya.

## Solusinya

Aplikasi web dengan satu pintu masuk dan 12 modul:

- **Dokumen resmi:** program pendidikan, sistem penilaian, tata tertib, notulen, dan surat keputusan.
- **Rencana pembelajaran** untuk 13 mata pelajaran.
- **Portofolio seluruh 47 guru**, dengan pencarian.
- **Data seluruh 840 siswa**, disusun per kelas.
- **Kalender akademik** sekolah dan pribadi, dengan ekspor PDF.
- **Jadwal pelajaran** per guru dan per kelas.
- Kesejahteraan siswa, manajemen mutu (ISO 9001:2015), simbol sekolah, dan kegiatan ekstrakurikuler.

## Yang paling banyak mengajari saya

**Akses dan keamanan.** Login memakai Google dan hanya menerima domain sekolah atau email yang diizinkan. Ada peran admin dan guru, logout otomatis setelah satu jam tidak aktif, dan log audit.

**Panel admin.** Pimpinan sekolah bisa mengubah isi 12 modul tanpa menyentuh kode, lengkap dengan urungkan, ulangi, dan riwayat versi. Mereka juga bisa melihat siapa yang sedang online secara real-time dan mengatur hak akses.

**Modul jadwal.** Mengimpor jadwal satu tahun penuh (882 kelas, 63 guru, dan 39 rombel), mendeteksi jadwal yang bentrok, mengelola ketidakhadiran guru, dan membuat formulir resmi guru pengganti serta beban mengajar dalam PDF.

**Laporan yang terhubung ke Google Drive.** Dengan Google Apps Script, intranet membaca folder Drive secara real-time dan menghitung kelengkapan dokumen per mata pelajaran, per kelas, dan per guru.

**Dokumentasi.** Saya menyerahkan panduan pengguna berisi tangkapan layar setiap proses agar sekolah bisa memakai dan merawat platform ini.

## Tangkapan layar

![Login Google khusus akun sekolah](/assets/projects/intranet/login.webp)

![Modul jadwal pelajaran](/assets/projects/intranet-horarios.webp)

![Kalender akademik sekolah dan pribadi](/assets/projects/intranet/calendario.webp)

![Rencana pembelajaran 13 mata pelajaran](/assets/projects/intranet/planes-de-area.webp)

![Laporan statistik portofolio guru](/assets/projects/intranet/reporte-portafolios.webp)

![Kegiatan ekstrakurikuler per kampus](/assets/projects/intranet/centros-de-interes.webp)
