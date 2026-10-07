---
title: "Gimnasio Campestre Comfaoriente 학교 인트라넷"
published: 2026-07-14
description: "SENA 인턴십 기간에 쿠쿠타의 한 학교의 학사·행정 정보를 한곳에 모은 플랫폼을 어떻게 만들었는지 소개합니다."
cover: "/assets/projects/intranet-horarios.webp"
pinned: true
tags: [React, TypeScript, Firebase, Google Apps Script, Tailwind CSS]
category: "프로젝트"
draft: false
---

2026년 1월부터 7월까지 SENA 인턴십으로 **Gimnasio Campestre Comfaoriente**에서 학교 인트라넷을 개발했습니다. 지금은 교장실, 교무팀, 교사들이 사용하고 있습니다.

- **저장소:** [github.com/Judarin15/Intranet](https://github.com/Judarin15/Intranet)
- **기술:** React, TypeScript, Vite, Tailwind CSS, Firebase(Authentication, Firestore, Hosting), Google Apps Script

## 문제

학교 정보가 Google Drive 폴더, 흩어진 파일, 종이 문서에 나뉘어 있었습니다. 교과 계획이나 학생 기록, 교사 시간표를 찾는 데 시간이 걸렸고, 서류가 얼마나 갖춰졌는지도 알 수 없었습니다.

## 해결 방법

하나의 입구와 12개 모듈로 이루어진 웹 애플리케이션입니다.

- **학교 문서:** 교육 계획, 평가 제도, 생활 규정, 회의록, 결정 사항.
- 13개 전 과목의 **교과 계획**.
- 교사 47명 전원의 **포트폴리오**(검색 가능).
- 학생 840명 전원의 **기록**(학년별 정리).
- 학교 전체와 개인용 **학사 일정**(PDF 내보내기 지원).
- 교사별·학급별 **시간표**.
- 학생 복지, 품질 경영(ISO 9001:2015), 학교 상징물, 방과 후 활동.

## 가장 많이 배운 부분

**접근과 보안.** Google 계정으로 로그인하며 학교 도메인이나 승인된 주소만 접속할 수 있습니다. 관리자와 교사 권한, 1시간 동안 활동이 없으면 자동 로그아웃, 감사 로그를 갖추었습니다.

**관리자 화면.** 교장실은 코드를 건드리지 않고 12개 모듈의 내용을 수정할 수 있으며, 실행 취소, 다시 실행, 버전 기록을 지원합니다. 누가 접속 중인지 실시간으로 확인하고 접근 권한도 관리할 수 있습니다.

**시간표 모듈.** 1년 치 시간표(수업 882개, 교사 63명, 학급 39개)를 한 번에 가져오고, 겹치는 시간을 찾아내고, 교사 결근을 관리하며, 대체 수업과 담당 시수 공식 서류를 PDF로 만듭니다.

**Google Drive 연동 보고서.** Google Apps Script로 Drive 폴더를 실시간으로 읽어 과목·학년·교사별 서류 완비율을 계산합니다.

**문서화.** 학교가 플랫폼을 계속 사용하고 관리할 수 있도록 모든 절차의 스크린샷이 담긴 사용자 매뉴얼을 전달했습니다.

## 스크린샷

![학교 계정 전용 Google 로그인](/assets/projects/intranet/login.webp)

![시간표 모듈](/assets/projects/intranet-horarios.webp)

![학교 전체와 개인용 학사 일정](/assets/projects/intranet/calendario.webp)

![13개 과목의 교과 계획](/assets/projects/intranet/planes-de-area.webp)

![교사 포트폴리오 통계 보고서](/assets/projects/intranet/reporte-portafolios.webp)

![캠퍼스별 방과 후 활동](/assets/projects/intranet/centros-de-interes.webp)
