---
title: "TechMarket：React と Supabase で作ったテック製品のオンラインストア"
published: 2026-09-15
description: "商品カタログ、カート、会員アカウント、管理画面を備えた家電・ゲーム関連のオンラインストア。"
cover: "/assets/projects/techmarket/inicio.webp"
tags: [React, Vite, Supabase, Figma]
category: "プロジェクト"
draft: false
---

**TechMarket** はテック製品（家電、ゲーム関連、アクセサリー）のオンラインストアです。

- **リポジトリ：** [github.com/Judarin15/TechMarket](https://github.com/Judarin15/TechMarket)
- **技術：** React、Vite、Supabase。UI は先に Figma で設計しました。

## 主な機能

- **ストア：** 価格・ブランド・カテゴリーで絞り込めるカタログ、検索、プロモーションバナー、お気に入り、カート、在庫チェック付きの購入手続き。
- **会員アカウント：** 会員登録とログイン、配送先を登録できるプロフィール、「もう一度購入」ができる注文履歴。
- **管理画面：** 価格・割引付きの商品、カテゴリー、注文とステータス、クーポン、カルーセルのバナー、管理者、顧客。
- すべての画面で**レスポンシブ**デザイン。

## プロトタイプから本格的なバックエンドへ

最初のバージョンではテスト用のバックエンドとして MockAPI を使っていました。その後、PostgreSQL データベース、認証、すぐに使える API を備えた **Supabase** に移行しました。

## スクリーンショット

![セールのカルーセルとおすすめ商品があるトップページ](/assets/projects/techmarket/inicio.webp)

![価格・ブランド・セールで絞り込めるカタログ](/assets/projects/techmarket/catalogo.webp)

![商品詳細](/assets/projects/techmarket/producto.webp)

![カート](/assets/projects/techmarket/carrito.webp)

![注文履歴のある会員アカウント](/assets/projects/techmarket/cuenta-pedidos.webp)

![管理画面：売上概要、在庫アラート、クーポン](/assets/projects/techmarket/admin-dashboard.webp)

![管理画面：商品管理](/assets/projects/techmarket/admin-productos.webp)

![スマートフォン表示](/assets/projects/techmarket/movil-inicio.webp)
