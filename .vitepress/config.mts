import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'

function entities(str: string) {
  return str.replaceAll('&', '&amp;').replaceAll('\\', '&#92;').replaceAll('"', '&#34;').replaceAll('\'', '&#39;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('&', '&amp;').replaceAll('`', '&#96;').replaceAll('=', '&#61;').replaceAll('(', '&#40;').replaceAll(')', '&#41;').replaceAll('[', '&#91;').replaceAll(']', '&#93;').replaceAll('{', '&#123;').replaceAll('}', '&#125;');

}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Diskrete Mathematik",
  base: "/dm/",
  description: "Interactive script",
  srcDir: 'docs',
  srcExclude: ['intro/**', '3-sets-relations-functions/**', '4-number-theory/**', '5-algebra/**'],
  ignoreDeadLinks: true,
  markdown: {
    math: true,
    config: (md) => {
      md.use(footnote);
      const originalRender = md.renderer.rules.math_inline!;

      md.renderer.rules.math_inline = (tokens, idx, options, env, self) => {
        const latex = entities(tokens[idx].content);
        return originalRender(tokens, idx, options, env, self).replace('</mjx-container>', '<mjx-fallback aria-hidden="true">&dollar;'+latex+'&dollar;</mjx-fallback></mjx-container>');
      };

      const originalRenderBlock = md.renderer.rules.math_block!

      md.renderer.rules.math_block = (tokens, idx, options, env, self) => {
        const latex = entities(tokens[idx].content);
        return originalRenderBlock(tokens, idx, options, env, self).replace('</mjx-container>', '<mjx-fallback aria-hidden="true">&dollar;&dollar;'+latex+'&dollar;&dollar;</mjx-fallback></mjx-container>');
      };
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Reasoning & Proofs', link: '/2-reasoning-proofs' },
      //{ text: 'Sets, Relations and Functions', link: '/3-sets-relations-functions' },
      //{ text: 'Number Theory', link: '/4-number-theory' },
      //{ text: 'Algebra', link: '/5-algebra' },
      { text: 'Logic', link: '/6-logic' },
    ],

    aside: "left",
    outline: {
      label: "In this chapter",
      level: [2,3],
    },
    footer: {
      message: "No guarantee for correctness or completeness. Use at your own risk.<br> All rights belong to the Ueli Maurer and respective authors.",
    },


    sidebar: false,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/manuelmeister/dm' }
    ]
  }
})
