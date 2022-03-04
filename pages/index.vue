<template>
  <main>
    <Hero></Hero>
    <div class="main-container">
      <AboutMe class="item"></AboutMe>
      <Blog class="item" :items="parsed"></Blog>
    </div>
  </main>
</template>

<script>
  export default {
    async mounted() {
      const feed = await this.$axios.$get('https://blog.gu3.me/feed/rss.xml')
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

<style lang="scss" scoped>
.main-container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px 1rem;
}

.item {
  margin: 64px 0;
}
</style>