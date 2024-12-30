<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-footer-before>
      <script client>
        import tippy from "tippy.js";

        const tooltip = tippy('.footnote-ref>a', {
          content(ref) {
            const id = ref.getAttribute('href');
            return document.querySelector(id).innerHTML.replace(/<a [^\n]+ class="footnote-backref">↩︎<\/a>/g, '');
          },
          allowHTML: true,
          interactive: true,
        })

        // Set up the Intersection Observer
        const observer = new IntersectionObserver((entries) => {
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
        document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach((headline) => {
          if (headline.id) {
            observer.observe(headline);
          }
        });
      </script>
    </template>
  </Layout>
</template>
