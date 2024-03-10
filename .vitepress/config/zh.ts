import {defineConfig, type DefaultTheme} from 'vitepress'
// @ts-ignore
import pgk from '../../package.json';

export const zh = defineConfig({
  lang: 'zh',
  title: "Ruoyi-TDesign项目文档",
  description: "ruoyi-tdesign 是重写 RuoYi-Vue-Plus UI的场景及其他功能场景的升级(不兼容原框架)。遵循前后端分离，后端采用Springboot，前端采用Vue3+Typescript+TDesignUI。",

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': {base: '/guide/', items: sidebarGuide()},
    },

    editLink: {
      pattern: 'https://github.com/yixiaco/ruoyi-tdesign-doc/edit/main/src/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2023-${new Date().getFullYear()} Yixiacoco`
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
    {text: '文档', link: '/guide/dev-run', activeMatch: '/guide/'},
    {
      text: pgk.version, items: [
        {
          text: '项目简介',
          link: 'https://github.com/yixiaco/ruoyi-tdesign/blob/main/README.md'
        },
        {
          text: '变更日志',
          link: 'https://github.com/yixiaco/ruoyi-tdesign/blob/main/CHANGELOG.md'
        },
      ]
    },
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '快速开始',
      items: [
        {text: '在开发环境中运行', link: 'dev-run'},
        {text: '部署', link: 'deploy'},
      ]
    }
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
