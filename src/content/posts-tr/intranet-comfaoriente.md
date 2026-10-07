---
title: "Gimnasio Campestre Comfaoriente için okul intraneti"
published: 2026-07-14
description: "SENA stajım sırasında Cúcuta'daki bir okulun akademik ve idari bilgilerini tek yerde toplayan platformu nasıl geliştirdiğimi anlatıyorum."
cover: "/assets/projects/intranet-horarios.webp"
pinned: true
tags: [React, TypeScript, Firebase, Google Apps Script, Tailwind CSS]
category: "Projeler"
draft: false
---

Ocak–Temmuz 2026 arasında SENA stajımı **Gimnasio Campestre Comfaoriente**'de yaptım ve okulun intranetini geliştirdim. Bugün okul yönetimi, akademik koordinasyon ve öğretmenler bu sistemi kullanıyor.

- **Depo:** [github.com/Judarin15/Intranet](https://github.com/Judarin15/Intranet)
- **Teknolojiler:** React, TypeScript, Vite, Tailwind CSS, Firebase (Authentication, Firestore, Hosting) ve Google Apps Script

## Sorun

Okulun bilgileri Google Drive klasörlerine, dağınık dosyalara ve kâğıt belgelere yayılmıştı. Bir ders planını, bir öğrencinin dosyasını ya da bir öğretmenin programını bulmak zaman alıyordu ve belgelerin ne kadar eksiksiz olduğunu bilmek mümkün değildi.

## Çözüm

Tek giriş noktası ve 12 modülden oluşan bir web uygulaması:

- **Okul belgeleri:** eğitim projesi, değerlendirme sistemi, okul yönetmeliği, tutanaklar ve kararlar.
- 13 dersin tamamı için **ders planları**.
- 47 öğretmenin tamamı için **portfolyolar**, arama özelliğiyle.
- 840 öğrencinin tamamı için sınıf düzeyine göre düzenlenmiş **öğrenci dosyaları**.
- Okul geneli ve kişisel **akademik takvim**, PDF dışa aktarmayla.
- Öğretmene ve sınıfa göre **ders programı**.
- Öğrenci refahı, kalite yönetimi (ISO 9001:2015), okul sembolleri ve ders dışı etkinlikler.

## En çok öğrendiklerim

**Erişim ve güvenlik.** Giriş Google ile yapılıyor ve yalnızca okulun alan adlarına veya izin verilen adreslere açık. Yönetici ve öğretmen rolleri, bir saat hareketsizlikten sonra otomatik çıkış ve denetim kaydı bulunuyor.

**Yönetim paneli.** Okul yönetimi 12 modülün içeriğini kod yazmadan düzenleyebiliyor; geri alma, yineleme ve sürüm geçmişi destekleniyor. Kimin çevrim içi olduğunu gerçek zamanlı görüp erişim izinlerini de yönetebiliyor.

**Ders programı modülü.** Yıllık programın tamamını (882 ders, 63 öğretmen ve 39 sınıf) içe aktarıyor, çakışmaları tespit ediyor, öğretmen devamsızlıklarını yönetiyor ve resmî vekâlet ile ders yükü formlarını PDF olarak üretiyor.

**Google Drive'a bağlı raporlar.** Google Apps Script sayesinde intranet Drive klasörlerini gerçek zamanlı okuyor ve belgelerin tamamlanma oranını ders, sınıf ve öğretmen bazında hesaplıyor.

**Dokümantasyon.** Okulun platformu kullanabilmesi ve sürdürebilmesi için her işlemin ekran görüntüleriyle anlatıldığı bir kullanım kılavuzu teslim ettim.

## Ekran görüntüleri

![Yalnızca okul hesaplarına açık Google girişi](/assets/projects/intranet/login.webp)

![Ders programı modülü](/assets/projects/intranet-horarios.webp)

![Okul geneli ve kişisel akademik takvim](/assets/projects/intranet/calendario.webp)

![13 dersin ders planları](/assets/projects/intranet/planes-de-area.webp)

![Öğretmen portfolyolarına ait istatistik raporu](/assets/projects/intranet/reporte-portafolios.webp)

![Kampüslere göre ders dışı etkinlikler](/assets/projects/intranet/centros-de-interes.webp)
