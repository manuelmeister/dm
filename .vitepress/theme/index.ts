// https://vitepress.dev/guide/custom-theme
import {h, onBeforeUpdate, onMounted, onUnmounted, onUpdated, reactive, ref, watch} from 'vue'
import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import tippy from "tippy.js";
import {onContentUpdated} from "vitepress";

const tooltip = ref(null);
const observer = ref(null);
const headlines = () => document.querySelectorAll('h1, h2, h3, h4, h5, h6');

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

            // Set up the Intersection Observer
            observer.value = new IntersectionObserver((entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        // Update the hash when the headline becomes visible
                        window.history.replaceState(null, '', `#${entry.target.id}`);
                        break; // Stop after the first visible headline
                    }
                }
            }, {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.5 // Trigger when 50% of the headline is visible
            });

            // Observe each headline
            headlines().forEach((headline) => {
                if (headline.id) {
                    observer.value.observe(headline);
                }
            });
        });
        onContentUpdated(() => {
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
            headlines().forEach((headline) => {
                observer.value.unobserve(headline);
            });
        });
    }
} satisfies Theme
