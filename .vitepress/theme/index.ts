// https://vitepress.dev/guide/custom-theme
import {h, onBeforeUpdate, onMounted, onUnmounted, onUpdated, reactive, ref, watch} from 'vue'
import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import tippy from "tippy.js";
import {onContentUpdated} from "vitepress";

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
                setTimeout(() => {
                    if (tooltip.value) {
                        if (Array.isArray(tooltip.value)) {
                            tooltip.value.forEach((t) => t.destroy());
                        } else {
                            tooltip.value.destroy();
                        }
                    }
                    tooltip.value = tippy('.footnote-ref>a', {
                        content(ref) {
                            const id = ref.getAttribute('href')!;
                            return document.querySelector(id).innerHTML.replace(/<a [^\n]+ class="footnote-backref">↩︎<\/a>/g, '');
                        },
                        allowHTML: true,
                        interactive: true,
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
            })
        });
        onContentUpdated(() => {
            debugger
            if (tooltip.value) {
                if (Array.isArray(tooltip.value)) {
                    tooltip.value.forEach((t) => t.unmount() && t.destroy());
                } else {
                    tooltip.value.unmount();
                    tooltip.value.destroy();
                }
            }
            tooltip.value = tippy('.footnote-ref>a', {
                content(ref) {
                    const id = ref.getAttribute('href')!;
                    return document.querySelector(id).innerHTML.replace(/<a href="#fnref[^"]+" class="footnote-backref">↩︎<\/a>/g, '');
                },
                allowHTML: true,
                interactive: true,
            })
        })
        onUnmounted(() => {
            if (tooltip.value) {
                if (Array.isArray(tooltip.value)) {
                    tooltip.value.forEach((t) => t.destroy());
                } else {
                    tooltip.value.destroy();
                }
            }
        });
    }
} satisfies Theme
