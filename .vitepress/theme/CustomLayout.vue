<script setup>
import DefaultTheme from 'vitepress/theme'
import InitHelpers from "./InitHelpers.vue";

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-footer-before>
      <InitHelpers />
    </template>
  </Layout>
</template>
