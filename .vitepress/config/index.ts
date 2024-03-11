import {defineConfig} from 'vitepress'
import {zh, search as zhSearch} from './zh'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/ruoyi-tdesign-doc/',
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
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


    socialLinks: [
      {icon: 'github', link: 'https://github.com/yixiaco/ruoyi-tdesign'},
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
