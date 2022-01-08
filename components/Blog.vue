<template>
  <BaseArea title="Blog Posts">
    <div class="flex justify-between my-10 mb-5 mx-auto flex-row w-full flex-wrap">
      <div class="w-full md:w-1/2 my-3 md:my-2" v-for="(item,index) in items.items.slice(0, 6)" v-bind:key="item.title"
        :class="index % 2 == 0 ? 'md:pr-2' : 'md:pl-2'">
        <a :href="item.link" target="_blank" class="hover:text-white">
          <div
            class="w-full z-1 h-30 group truncate bg-default-800 rounded-xl p-6 transition-all cursor-pointer relative overflow-hidden border border-default-600 border-opacity-20 background-default-800 hover:bg-accent hover:border-accent hover:text-black hover:shadow-glow">
              <h3 class="my-0 z-1 uppercase truncate">{{ item.title }}</h3>
              <h4 class="my-0 z-1 truncate">{{ item.pubDate | date }}</h4>
              <div class="absolute right-0 top-0 bottom-0 m-0 w-1/4 bg-cover bg-center transition-all opacity-40 transform group-hover:opacity-75 z-0 group-hover:scale-110 article-image"
                :style="`background-image: url(${item.enclosure ? item.enclosure.url : 'https://source.unsplash.com/random/?landscape'})`"
              >
            </div>
            {{ item.content }}
          </div>
        </a>
      </div>
    </div>
    
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

<style lang="scss">
@import "@/assets/scrimMask.scss";
.article-image {
  @include scrimMask( black, "to left" );
  min-width: 200px;
}
</style>