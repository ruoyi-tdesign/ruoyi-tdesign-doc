# RuYi-TDesign 文档

<div align="center">

**基于 VitePress 构建的 RuoYi-TDesign 项目官方文档**

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/github/package-json/v/ruoyi-tdesign/ruoyi-tdesign-doc)](package.json)
[![Vue](https://img.shields.io/badge/Vue-3.x-green.svg)](https://vuejs.org/)
[![VitePress](https://img.shields.io/badge/VitePress-1.6.4-blue.svg)](https://vitepress.dev/)

</div>

---

## 📖 项目简介

这是 **RuoYi-TDesign** 项目的官方文档站点，为基于 SpringBoot3 + Vue3 + TypeScript + TDesign 构建的前后端分离管理系统提供全面的技术文档支持。

### ✨ 核心特性

- 🚀 **现代化架构** - SpringBoot3 + Vue3 Composition API + TypeScript
- 🎨 **精美 UI 设计** - 基于腾讯 TDesign 设计组件库
- ☁️ **多租户 SaaS** - 原生支持多租户架构，满足 SaaS 场景需求
- 🔐 **多账号体系** - 支持多种账号登录认证方式
- 🔑 **第三方登录** - 集成 JustAuth，支持微信、钉钉等数十种认证
- 📱 **消息通知** - 开箱即用的短信、邮箱发送功能
- 🌐 **分布式集群** - 原生支持集群部署，高并发无压力
- 🛠️ **代码生成** - 细粒度可选项，快速生成增删改查代码

---

## 📦 技术栈

### 前端
- **框架**: Vue 3.x (Composition API)
- **UI 组件库**: TDesign
- **开发语言**: TypeScript
- **构建工具**: Vite
- **文档框架**: VitePress 1.6.4

### 后端
- **框架**: SpringBoot 3.x
- **权限安全**: Spring Security
- **ORM**: MyBatis Plus
- **数据库**: MySQL / PostgreSQL
- **缓存**: Redis
- **消息队列**: RabbitMQ / Kafka
- **分布式任务调度**: PowerJob

---

## 🚀 快速开始

### 环境要求

- Node.js >= 18.x
- pnpm >= 8.x
- Java >= 17 (后端)
- Maven >= 3.8 (后端)

### 安装依赖

```bash
pnpm install
```

### 本地运行

```bash
# 启动开发服务器
pnpm run dev

# 构建生产版本
pnpm run build

# 预览生产构建
pnpm run preview
```

### 访问地址

本地开发环境默认访问：`http://localhost:5173/ruoyi-tdesign-doc/`

---

## 📚 文档结构

```
src/
├── ruoyi-tdesign/          # 文档内容
│   ├── intro.md           # 项目介绍
│   ├── dev-run.md         # 开发指南
│   ├── project-structure.md  # 项目结构
│   ├── issue.md           # 常见问题
│   ├── basic/             # 基础功能
│   │   ├── tenant.md      # 多租户
│   │   ├── user.md        # 用户管理
│   │   ├── message.md     # 消息通知
│   │   └── oss.md         # OSS 对象存储
│   ├── deploy/            # 部署指南
│   │   ├── manual-deploy.md       # 手动部署
│   │   ├── docker-deploy.md       # Docker 部署
│   │   ├── kubernetes-deploy.md   # K8s 部署
│   │   └── admin-init.md          # 初始化配置
│   ├── framework/         # 框架扩展
│   │   ├── api-doc.md     # API 文档
│   │   ├── i18n.md        # 国际化
│   │   └── new-module.md  # 新增模块
│   └── extended/          # 扩展功能
│       ├── websocket.md   # WebSocket
│       ├── translation.md # 翻译功能
│       └── dynamic-datasource.md  # 动态数据源
└── index.md               # 首页
```

---

## 🔗 相关链接

- **项目源码**: [GitHub](https://github.com/ruoyi-tdesign/ruoyi-tdesign) | [Gitee](https://gitee.com/yixiacoco/ruoyi-tdesign)
- **文档源码**: [GitHub](https://github.com/ruoyi-tdesign/ruoyi-tdesign-doc)
- **在线文档**: https://ruoyi-tdesign.github.io/ruoyi-tdesign-doc/
- **若依官网**: http://www.ruoyi.vip/

---

## 📄 开源协议

MIT License

---

## 👥 开发者社区

欢迎加入我们的开发者社区，一起交流和学习！

- 💬 GitHub Issues: 提交问题和建议
- 📧 Email: 627428179@qq.com
- 💻 QQ 群：874023473

---

<div align="center">

如果这个项目对你有帮助，请给一个 ⭐ Star 支持！

Made with ❤️ by RuoYi-TDesign Team

</div>
