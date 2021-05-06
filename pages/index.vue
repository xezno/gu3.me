<template>
  <main>
    <div class="px-64">
      <Hero class="my-5"></Hero>
    </div>
    <div class="bg-default-800 py-16 px-64">
      <AboutMe class="my-16"></AboutMe>
      <hr />
      <Blog class="my-16" :items="parsed"></Blog>
    </div>
  </main>
</template>


<script>
  export default {
    async asyncData({ $axios, $parse }) {
      const ip = await $axios.$get('https://blog.gu3.me/feed/rss.xml')
      let Parser = require('rss-parser');
      let parser = new Parser();
      let parsed = await parser.parseString(ip);
      console.log(parsed);
      return { parsed }
    }
  }
</script>