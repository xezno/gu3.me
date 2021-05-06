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
    async mounted() {
      const feed = await this.$axios.$get('/blog/feed/rss.xml')
      let Parser = require('rss-parser');
      let parser = new Parser();
      let parsed = await parser.parseString(feed);
      this.parsed = parsed;
    },
    data: function() {
      return {
        parsed: {
          items: []
        }
      }
    }
  }
</script>