import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Diskrete Mathematik",
  base: "/dm/",
  description: "Interactive script",
  srcDir: 'docs',
  markdown: {
    math: true,
    config: (md) => {
      md.use(footnote)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Reasoning & Proofs', link: '/2-reasoning-proofs' },
      { text: 'Sets, Relations and Functions', link: '/3-sets-relations-functions' },
      //{ text: 'Number Theory', link: '/4-number-theory' },
      //{ text: 'Algebra', link: '/5-algebra' },
      //{ text: 'Logic', link: '/6-logic' },
    ],

    aside: "left",
    outline: {
      level: [2,3],
    },

    sidebar: false,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
