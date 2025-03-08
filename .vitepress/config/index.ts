import {defineConfig} from 'vitepress'
import {zh, search as zhSearch} from './zh'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/ruoyi-tdesign-doc/',
  ignoreDeadLinks: true,
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    image: {
      // 图片懒加载
      lazyLoading: true
    }
  },
  head: [
    [
      'script',
      {async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-4G6JMEEB05'}
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-4G6JMEEB05');`
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // @ts-ignore
    lastUpdated: true,
    outline: 3,

    socialLinks: [
      {icon: 'github', link: 'https://github.com/ruoyi-tdesign/ruoyi-tdesign'},
    ],

    search: {
      provider: 'local',
      options: {
        locales: {...zhSearch}
      }
    },

  },

  srcDir: './src',

  locales: {
    root: {label: '简体中文', ...zh},
  }

})
