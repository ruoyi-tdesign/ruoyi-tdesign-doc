---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Ruoyi-TDesign文档"
  text: "Springboot3和Vue3+TS+TDesign前后端分离"
  tagline: ruoyi-tdesign 是重写 RuoYi-Vue-Plus UI的场景及其他功能场景的升级(不兼容原框架)。
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/markdown-examples
    - theme: alt
      text: Github
      link: https://github.com/yixiaco/ruoyi-tdesign
    - theme: alt
      text: Gitee
      link: https://gitee.com/yixiacoco/ruoyi-tdesign

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
