<template>
  <BaseArea title="Blog Posts">
    <div class="flex flex-wrap justify-between mb-20">
      <div class="w-full my-2.5 md:my-0 md:w-card1/3" v-for="item in items.items.slice(0, 3)" v-bind:key="item.title">
        <a :href="item.link" target="_blank" class="hover:text-white">
          <BaseCard
            class="md:mx-2.5 first:ml-0 last:mr-0 h-full"
            :title="item.title" 
            :image="item.enclosure ? item.enclosure.url : 'https://source.unsplash.com/random/?landscape'"
            link="https://blog.gu3.me/"
            :date="item.pubDate">
            <!-- :tags="['test', 'blog', 'entry']" Currently unsupported... -->
            {{ item.content }}
          </BaseCard>
        </a>
      </div>
    </div>
    <!-- TODO: Eventually replace the blog entirely by combining this site with it, effectively making this website a front
    page to the blog, and making this a link to some sort of directory listing - i.e. https://gu3.me/articles -->
    <div class="w-full flex justify-center">
      <a target="_blank" class="uppercase font-bold text-default-300 p-1 hover:text-accent" href="https://blog.gu3.me/">View more...</a>
    </div>
  </BaseArea>
</template>

<script>
export default {
  props: {
    items: Object
  }
}
</script>