import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'
import container from 'markdown-it-container'
import type MarkdownIt from 'markdown-it'

function entities(str: string) {
  return str.replaceAll('&', '&amp;').replaceAll('"', '&#34;').replaceAll('\'', '&#39;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('&', '&amp;').replaceAll('`', '&#96;').replaceAll('=', '&#61;').replaceAll('(', '&#40;').replaceAll(')', '&#41;').replaceAll('[', '&#91;').replaceAll(']', '&#93;').replaceAll('{', '&#123;').replaceAll('}', '&#125;');
}

function createContainer(
    klass: string,
    defaultTitle: string,
    md: MarkdownIt
): ContainerArgs {
  return [
    container,
    klass,
    {
      render(tokens, idx, _options, env: { references?: any }) {
        const token = tokens[idx]
        const info = token.info.trim().slice(klass.length).trim()
        const attrs = md.renderer.renderAttrs(token)
        if (token.nesting === 1) {
          const title = md.renderInline(info || defaultTitle, {
            references: env.references
          })
          if (klass === 'details')
            return `<details class="${klass} custom-block"${attrs}><summary>${title}</summary>\n`
          return `<div class="${klass} info custom-block"${attrs}><p class="custom-block-title">${title}</p>\n`
        } else return klass === 'details' ? `</details>\n` : `</div>\n`
      }
    }
  ]
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Diskrete Mathematik",
  base: "/dm/",
  description: "Interactive script",
  srcDir: 'docs',
  srcExclude: ['intro/**', '4-number-theory/**','5-algebra/**'],
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'https://manuelmeister.github.io/dm/',
    transformItems: (items) => {
        return items.map((item) => {
          if (item.url.endsWith('/')) {
            item.url += 'index.html'
          } else if (item.url == '') {
            item.url += 'index.html'
          }
          return item
        })
    }
  },
  markdown: {
    math: {
      tex: {
        macros: {
          cf: ['\\mathcal{#1}', 1],
        }
      }
    },
    config: (md) => {
      md.use(footnote);
      md.renderer.rules.footnote_caption = (tokens, idx/*, options, env, slf */) => {
        let n = Number(tokens[idx].meta.label).toString()

        if (tokens[idx].meta.subId > 0) n += `:${tokens[idx].meta.subId}`

        return `[${n}]`
      };
      md.renderer.rules.footnote_anchor_name = (tokens, idx, options, env, slf) => {
        const n = Number(tokens[idx].meta.label).toString()
        let prefix = ''

        if (typeof env.docId === 'string') prefix = `-${env.docId}-`

        return prefix + n
      };
      md.renderer.rules.footnote_ref = (tokens, idx, options, env, slf) => {
        const id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf)
        const caption = slf.rules.footnote_caption(tokens, idx, options, env, slf)
        let refid = id

        if (tokens[idx].meta.subId > 0) refid += `:${tokens[idx].meta.subId}`

        return `<sup class="footnote-ref"><a href="#fn${id}" id="fnref${refid}">${caption}</a></sup>`
      };
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

      md.use(...createContainer('proposition', 'Proposition', md));
      md.use(...createContainer('definition', 'Definition', md));
      md.use(...createContainer('example', 'Example', md));
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

    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          const html = md.render(src, env)
          if (env.frontmatter?.title)
            return md.render(`# ${env.frontmatter.title}`) + html
          return html
        }
      }
    },

    aside: "left",
    outline: {
      label: "In this chapter",
      level: [2,3],
    },
    footer: {
      message: "No guarantee for correctness or completeness. Use at your own risk.<br> All rights belong to the Ueli Maurer and respective authors.",
    },
    lastUpdated: true,
    editLink: {
      pattern: 'https://github.com/manuelmeister/dm/edit/main/docs/:path'
    },


    sidebar: false,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/manuelmeister/dm' }
    ]
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => ['center'].includes(tag)
      }
    }
  }
})
