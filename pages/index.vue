<template>
  <main>
    <SectionHero></SectionHero>
    <div class="main-container">
      <SectionProjects id="projects"></SectionProjects>
      <SectionAboutMe class="item" id="skills"></SectionAboutMe>
      <SectionBlog class="item" :items="parsed" id="blog"></SectionBlog>
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
@import "~assets/variables.scss";

.main-container {
  width: 100%;
  max-width: $screen-md;
  margin: 0 auto;
  padding: 32px 1rem;
}

.item {
  margin: 64px 0;
}
</style>