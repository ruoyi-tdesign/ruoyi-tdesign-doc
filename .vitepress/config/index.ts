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
      {},
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5XT6TK2C');`
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
