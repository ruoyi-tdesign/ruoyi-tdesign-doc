---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Ruoyi-TDesign"
  text: "Springboot3和Vue3+TS+TDesign前后端分离"
  tagline: ruoyi-tdesign 是重写 RuoYi-Vue-Plus UI的场景及其他功能场景的升级(不兼容原框架)。
  actions:
    - theme: brand
      text: 快速开始
      link: /ruoyi-tdesign/intro
    - theme: alt
      text: Github
      link: https://github.com/ruoyi-tdesign/ruoyi-tdesign
    - theme: alt
      text: Gitee
      link: https://gitee.com/yixiacoco/ruoyi-tdesign
    - theme: alt
      text: Doc Github
      link: https://github.com/ruoyi-tdesign/ruoyi-tdesign-doc

features:
  - title: 多租户
    details: 配置系统租户，支持 SaaS 场景下的多租户功能
  - title: 多账号体系
    details: 支持在一个系统中同时登录多个账号体系
  - title: 第三方授权登录
    details: 采用 JustAuth 第三方登录组件 支持微信、钉钉等数十种三方认证
  - title: 开箱即用的短信/邮箱发送
    details: 系统后台支持实时配置短信、邮箱、自定义发送源；可自定义扩展公众号、小程序、钉钉消息配置。
  - title: 分布式集群
    details: 原生支持集群环境，多个服务同时负载请求，让响应不再延迟。
  - title: 代码生成
    details: 支持更细粒度的增删改查可选项生成
---
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
