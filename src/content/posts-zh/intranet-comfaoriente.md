---
title: "为 Gimnasio Campestre Comfaoriente 开发的校园内网"
published: 2026-07-14
description: "我在 SENA 实习期间，如何为库库塔的一所学校开发集中管理教学和行政信息的平台。"
cover: "/assets/projects/intranet-horarios.webp"
pinned: true
tags: [React, TypeScript, Firebase, Google Apps Script, Tailwind CSS]
category: "项目"
draft: false
---

2026 年 1 月至 7 月，我在 **Gimnasio Campestre Comfaoriente** 完成 SENA 实习，期间开发了学校的内网。现在学校领导、教务部门和教师都在使用它。

- **代码仓库：** [github.com/Judarin15/Intranet](https://github.com/Judarin15/Intranet)
- **技术栈：** React、TypeScript、Vite、Tailwind CSS、Firebase（Authentication、Firestore、Hosting）和 Google Apps Script

## 问题

学校的信息分散在 Google Drive 文件夹、零散文件和纸质文档中。查找一份课程计划、一名学生的档案或一位教师的课表都很费时，也无法知道资料是否齐全。

## 解决方案

一个统一入口、包含 12 个模块的 Web 应用：

- **学校文件：** 办学方案、评价体系、校规、会议纪要和决议。
- 全部 13 门学科的**课程计划**。
- 全部 47 名教师的**教学档案**，支持搜索。
- 全部 840 名学生的**学籍档案**，按年级整理。
- 学校和个人**校历**，支持导出 PDF。
- 按教师和按班级查看的**课程表**。
- 学生关怀、质量管理（ISO 9001:2015）、校徽校歌等学校标识以及课外活动。

## 收获最大的部分

**访问与安全。** 使用 Google 登录，仅允许学校域名或授权邮箱访问。设有管理员和教师角色，闲置一小时自动退出，并保留审计日志。

**管理后台。** 学校领导无需写代码即可编辑 12 个模块的内容，支持撤销、重做和版本历史。还能实时查看在线用户并管理访问权限。

**课表模块。** 可一次性导入全年课表（882 节课、63 名教师、39 个班级），自动检测时间冲突，管理教师缺勤，并生成官方的代课单和教学工作量表 PDF。

**连接 Google Drive 的报告。** 借助 Google Apps Script，内网实时读取 Drive 文件夹，按学科、年级和教师统计资料完成度。

**文档。** 我交付了一份包含每个操作步骤截图的用户手册，方便学校使用和维护平台。

## 截图

![仅限学校账号的 Google 登录](/assets/projects/intranet/login.webp)

![课程表模块](/assets/projects/intranet-horarios.webp)

![学校与个人校历](/assets/projects/intranet/calendario.webp)

![13 门学科的课程计划](/assets/projects/intranet/planes-de-area.webp)

![教师教学档案完成度统计报告](/assets/projects/intranet/reporte-portafolios.webp)

![各校区的课外活动](/assets/projects/intranet/centros-de-interes.webp)
