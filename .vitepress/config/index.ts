import { defineConfig } from 'vitepress'
import { zh, search as zhSearch } from './zh'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // @ts-ignore
    lastUpdated: true,


    socialLinks: [
      { icon: 'github', link: 'https://github.com/yixiaco/ruoyi-tdesign' },
    ],

    search: {
      provider: 'local',
      options: {
        locales: { ...zhSearch }
      }
    },

  },

  srcDir: './src',

  locales: {
    root: { label: '简体中文', ...zh },
  }

})
