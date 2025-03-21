import {defineConfig, type DefaultTheme} from 'vitepress'
// @ts-ignore
import pgk from '../../package.json';

export const zh = defineConfig({
  lang: 'zh',
  title: "Ruoyi-TDesign",
  description: "ruoyi-tdesign 是重写 RuoYi-Vue-Plus UI的场景及其他功能场景的升级(不兼容原框架)。遵循前后端分离，后端采用Springboot，前端采用Vue3+Typescript+TDesignUI。",

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/ruoyi-tdesign/': {base: '/ruoyi-tdesign/', items: sidebarRuoyiTdesign('/ruoyi-tdesign/')},
    },

    editLink: {
      pattern: 'https://github.com/ruoyi-tdesign/ruoyi-tdesign-doc/edit/main/src/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2023-${new Date().getFullYear()} Yixiaco`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {text: '首页', link: '/'},
    {text: '后端文档', link: '/ruoyi-tdesign/dev-run', activeMatch: '/ruoyi-tdesign/'},
    {text: '原框架文档', link: 'https://plus-doc.dromara.org/#/ruoyi-vue-plus/home'},
    {
      text: pgk.version, items: [
        {
          text: '项目简介',
          link: 'https://github.com/ruoyi-tdesign/ruoyi-tdesign/blob/main/README.md'
        },
        {
          text: '变更日志',
          link: 'https://github.com/ruoyi-tdesign/ruoyi-tdesign/blob/main/CHANGELOG.md'
        },
      ]
    },
  ]
}

function sidebarRuoyiTdesign(base = ''): DefaultTheme.SidebarItem[] {
  return [
    {text: '项目简介', link: 'intro'},
    {
      text: '快速开始',
      items: [
        {text: '在开发环境中运行', link: 'dev-run'},
        {
          text: '应用部署', collapsed: false, items: [
            {text: '生产环境切换', link: 'deploy/environment-switching'},
            {text: '搭建Admin监控', link: 'deploy/admin-init'},
            {text: '搭建PowerJob任务调度中心', link: 'deploy/power-job-init'},
            {text: '手动部署', link: 'deploy/manual-deploy'},
            {text: 'docker部署', link: 'deploy/docker-deploy'},
            {text: 'docker-compose部署', link: 'deploy/docker-compose-deploy'},
          ]
        },
      ]
    },
    {
      text: '框架功能', collapsed: false, items: [
        {text: '项目结构', link: 'project-structure'},
        {
          text: '框架相关', collapsed: false, items: [
            {text: '创建新模块', link: 'framework/new-module'},
            {text: 'Api接口文档', link: 'framework/api-doc'},
            {text: '国际化', link: 'framework/i18n'},
          ]
        },
        {
          text: '基础功能', collapsed: false, items: [
            {text: '系统用户相关', link: 'basic/user'},
            {text: '分页功能', link: 'basic/pagination'},
            {text: 'OSS功能', link: 'basic/oss'},
            {text: 'OSS规则', link: 'basic/oss-rule'},
            {text: '消息功能', link: 'basic/message'},
            {text: '接口放行', link: 'basic/interface-release'},
            {text: '多租户功能', link: 'basic/tenant'},
          ]
        },
        {
          text: '扩展功能', collapsed: false, items: [
            {text: '多数据源', link: 'extended/dynamic-datasource'},
            {text: '翻译功能', link: 'extended/translation'},
            {text: '数据脱敏', link: 'extended/data-masking'},
            {text: 'websocket', link: 'extended/websocket'},
          ]
        },
      ]
    },
    {text: '常见问题', link: 'issue'},
    {
      text: 'IDEA使用技巧', collapsed: false, items: [
        {text: 'IDEA使用Git技巧', link: 'idea/idea-git'}
      ]
    },
  ]
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}
