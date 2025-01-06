<template>
  <div>
    <h1>Definitions</h1>
    <ul>
      <template v-for="entry in entries">
        <li v-for="def in entry.defs"><a :href="entry.url + '#' + def.anchor">{{ def.title }}</a></li>
      </template>
    </ul>
    <h1>Propositions</h1>
    <ul>
      <template v-for="entry in entries">
        <li v-for="prop in entry.props"><a :href="entry.url + '#' + prop.anchor">{{ prop.title }}</a></li>
      </template>
    </ul>
  </div>
</template>

<script>
import {data} from '../docs/posts.data.js'
import {withBase} from "vitepress";

export default {
  name: "References",
  data() {
    return {
      entries: data.map((post) => ({
            url: withBase(post.url),
            defs: [...post.src.matchAll(/^::: definition (?<title>.+)\{#(?<anchor>.+)}$/gm)].map(({groups}) => groups),
            props: [...post.src.matchAll(/^::: proposition (?<title>.+)\{#(?<anchor>.+)}$/gm)].map(({groups}) => groups),
            //examples: [...post.src.matchAll(/^::: example (?<title>.+)\{#(?<anchor>.+)}$/gm)].map(({groups}) => groups)
          })
      )
    }
  },
}
</script>

<style scoped>

</style>
