// https://vitepress.dev/guide/custom-theme
import {h, onBeforeUpdate, onMounted, onUnmounted, onUpdated, reactive, ref, watch} from 'vue'
import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import CustomLayout from "./CustomLayout.vue";

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(CustomLayout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        })
    },
    enhanceApp({app, router, siteData}) {},
} satisfies Theme
