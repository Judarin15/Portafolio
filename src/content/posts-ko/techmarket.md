---
title: "TechMarket: React와 Supabase로 만든 IT 제품 쇼핑몰"
published: 2026-09-15
description: "상품 목록, 장바구니, 고객 계정, 관리자 화면을 갖춘 전자제품·게임 용품 온라인 쇼핑몰입니다."
cover: "/assets/projects/techmarket/inicio.webp"
tags: [React, Vite, Supabase, Figma]
category: "프로젝트"
draft: false
---

**TechMarket**은 IT 제품(전자제품, 게임 용품, 액세서리)을 판매하는 온라인 쇼핑몰입니다.

- **저장소:** [github.com/Judarin15/TechMarket](https://github.com/Judarin15/TechMarket)
- **기술:** React, Vite, Supabase. UI는 먼저 Figma로 설계했습니다.

## 주요 기능

- **스토어:** 가격·브랜드·카테고리 필터가 있는 상품 목록, 검색, 프로모션 배너, 찜하기, 장바구니, 재고 확인이 되는 결제.
- **고객 계정:** 회원가입과 로그인, 배송 정보가 담긴 프로필, '다시 구매'가 가능한 주문 내역.
- **관리자 화면:** 가격·할인이 있는 상품, 카테고리, 주문과 상태, 쿠폰, 캐러셀 배너, 관리자 계정, 고객.
- 모든 화면에서 **반응형** 디자인.

## 프로토타입에서 실제 백엔드로

첫 버전은 테스트용 백엔드로 MockAPI를 사용했습니다. 이후 PostgreSQL 데이터베이스, 인증, 바로 쓸 수 있는 API를 제공하는 **Supabase**로 옮겼습니다.

## 스크린샷

![할인 캐러셀과 추천 상품이 있는 메인 페이지](/assets/projects/techmarket/inicio.webp)

![가격·브랜드·할인 필터가 있는 상품 목록](/assets/projects/techmarket/catalogo.webp)

![상품 상세](/assets/projects/techmarket/producto.webp)

![장바구니](/assets/projects/techmarket/carrito.webp)

![주문 내역이 있는 고객 계정](/assets/projects/techmarket/cuenta-pedidos.webp)

![관리자 화면: 매출 요약, 재고 알림, 쿠폰](/assets/projects/techmarket/admin-dashboard.webp)

![관리자 화면: 상품 관리](/assets/projects/techmarket/admin-productos.webp)

![모바일 화면](/assets/projects/techmarket/movil-inicio.webp)
