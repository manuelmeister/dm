// https://vitepress.dev/guide/custom-theme
import {h, onBeforeUpdate, onMounted, onUnmounted, onUpdated, reactive, ref, watch} from 'vue'
import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import 'tippy.js/dist/tippy.css';
import tippy from "tippy.js";

const tooltip = ref(null);

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        })
    },
    enhanceApp({app, router, siteData}) {
        if (typeof window !== 'undefined') {
            watch(() => router.route.path, (path) => {
                if (tooltip.value && !Array.isArray(tooltip.value)) {
                    tooltip.value.destroy();
                }
                setTimeout(() => {
                    if (tooltip.value && !Array.isArray(tooltip.value)) {
                        tooltip.value.destroy();
                    }
                    tooltip.value = tippy('.footnote-ref>a', {
                        content(ref) {
                            const id = ref.getAttribute('href')!;
                            return document.querySelector(id).innerHTML.replace(/<a [^\n]+ class="footnote-backref">↩︎<\/a>/g, '');
                        },
                        allowHTML: true,
                        interactive: true,
                        theme: 'light',
                    })
                }, 0)
            })
        }
    },
    setup() {
        onMounted(() => {
            tooltip.value = tippy('.footnote-ref>a', {
                content(ref) {
                    const id = ref.getAttribute('href')!;
                    return document.querySelector(id).innerHTML.replace(/<a [^\n]+ class="footnote-backref">↩︎<\/a>/g, '');
                },
                allowHTML: true,
                interactive: true,
                theme: 'light',
            })
        });
        onUnmounted(() => {
            tooltip.value.destroy();
        });
    }
} satisfies Theme
