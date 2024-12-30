<script lang="ts">
import tippy from "tippy.js";
import {onMounted, onUnmounted, ref, watch} from "vue";
import {onContentUpdated, useRoute} from "vitepress";

export default {
  name: "InitHelpers",
  setup() {
    const tooltip = ref(null);
    const observer = ref(null);

    const route = useRoute()

    if (typeof window !== 'undefined') {
      watch(() => route.path, (path) => {
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

    onMounted(() => {
      tooltip.value = tippy('.footnote-ref>a', {
        content(ref) {
          const id = ref.getAttribute('href');
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
      document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach((headline) => {
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

      if (observer.value) {
        // Observe each headline
        document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach((headline) => {
          if (headline.id) {
            observer.value.observe(headline);
          }
        });
      }
    })

    onUnmounted(() => {
      if (tooltip.value) {
        if (Array.isArray(tooltip.value)) {
          tooltip.value.forEach((t) => t.destroy());
        } else {
          tooltip.value.destroy();
        }
      }
      observer.value.disconnect();
      observer.value = null;
    });
  }
}
</script>

<template>
  <div></div>
</template>

<style scoped>

</style>
