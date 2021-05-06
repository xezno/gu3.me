<template>
  <BaseArea title="Blog Posts">
    <div class="flex flex-wrap justify-evenly mb-20">
      <div class="mr-5 w-card1/3" v-for="(item, index) in items.items" v-bind:key="item.title">
        <a :href="item.link" target="_blank" class="hover:text-white">
          <BaseCard
            class="h-full"
            v-if="index < 3"
            :title="item.title" 
            image="https://source.unsplash.com/random/?landscape" 
            link="https://blog.gu3.me/"
            :date="item.pubDate"
            :tags="['test', 'blog', 'entry']">
            {{ item.content }}
          </BaseCard>
        </a>
      </div>
    </div>
    <!-- TODO: Eventually replace the blog entirely by combining this site with it, effectively making this website a front
    page to the blog, and making this a link to some sort of directory listing - i.e. https://gu3.me/articles -->
    <div class="w-full flex justify-center">
      <a target="_blank" class="uppercase font-bold text-default-300 p-1" href="https://blog.gu3.me/">View more...</a>
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