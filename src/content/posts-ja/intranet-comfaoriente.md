---
title: "Gimnasio Campestre Comfaoriente の学校イントラネット"
published: 2026-07-14
description: "SENA のインターンシップで、ククタの学校の教務・事務情報を一元化するプラットフォームをどう作ったか。"
cover: "/assets/projects/intranet-horarios.webp"
pinned: true
tags: [React, TypeScript, Firebase, Google Apps Script, Tailwind CSS]
category: "プロジェクト"
draft: false
---

2026 年 1 月から 7 月まで、SENA のインターンシップとして **Gimnasio Campestre Comfaoriente** で学校のイントラネットを開発しました。現在は校長室、教務担当、教員が利用しています。

- **リポジトリ：** [github.com/Judarin15/Intranet](https://github.com/Judarin15/Intranet)
- **技術：** React、TypeScript、Vite、Tailwind CSS、Firebase（Authentication、Firestore、Hosting）、Google Apps Script

## 課題

学校の情報は Google Drive のフォルダ、バラバラのファイル、紙の書類に分散していました。指導計画や生徒の記録、教員の時間割を探すのに時間がかかり、書類がどこまでそろっているかも把握できませんでした。

## 解決策

入口を一つにまとめた、12 のモジュールを持つ Web アプリです。

- **学校文書：** 教育計画、評価制度、生活規則、議事録、決定事項。
- 全 13 教科の**指導計画**。
- 教員 47 名全員の**ポートフォリオ**（検索付き）。
- 生徒 840 名全員の**記録**（学年別）。
- 学校全体と個人の**行事カレンダー**（PDF 出力付き）。
- 教員別・クラス別の**時間割**。
- 生徒支援、品質管理（ISO 9001:2015）、校章などの学校の象徴、課外活動。

## 特に学んだこと

**アクセスとセキュリティ。** ログインは Google で行い、学校のドメインまたは許可されたアドレスのみ利用できます。管理者と教員の権限、1 時間操作がないと自動でログアウトする機能、監査ログを用意しました。

**管理画面。** 校長室はコードに触れずに 12 モジュールの内容を編集でき、元に戻す・やり直す・版の履歴にも対応しています。誰がオンラインかをリアルタイムで確認し、アクセス権限も管理できます。

**時間割モジュール。** 年間の時間割（882 コマ、教員 63 名、39 クラス）を一括で取り込み、重複を検出し、教員の欠勤を管理し、代講や担当時数の公式書類を PDF で出力します。

**Google Drive 連携レポート。** Google Apps Script で Drive のフォルダをリアルタイムに読み込み、教科・学年・教員ごとの書類の充足率を計算します。

**ドキュメント。** 学校がプラットフォームを使い続け、保守できるよう、各手順のスクリーンショット付きのユーザーマニュアルを納品しました。

## スクリーンショット

![学校アカウント限定の Google ログイン](/assets/projects/intranet/login.webp)

![時間割モジュール](/assets/projects/intranet-horarios.webp)

![学校全体と個人の行事カレンダー](/assets/projects/intranet/calendario.webp)

![13 教科の指導計画](/assets/projects/intranet/planes-de-area.webp)

![教員ポートフォリオの統計レポート](/assets/projects/intranet/reporte-portafolios.webp)

![キャンパス別の課外活動](/assets/projects/intranet/centros-de-interes.webp)
