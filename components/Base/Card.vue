<template>
  <div 
    class="shadow-md bg-default-800 border-default-600 border border-solid rounded-lg
      p-5 my-10 overflow-hidden group"
    :class="link ? 'group cursor-pointer transform-gpu transition hover:-translate-y-2 hover:border hover:bg-accent hover:text-black hover:border-accent \
      hover:shadow-glow':''">
    <div v-if="image" :style="`background-image: url(${image});`" 
      class="h-64 transition bg-cover bg-center -mt-5 bg-default-700 group-hover:bg-accent -mx-5 mb-5">
    </div>
    <span v-if="date" class="uppercase transition text-gray-300 group-hover:text-black font-bold text-sm">
      <fa :icon="faCalendar" class="mr-1"></fa> {{ date | date }}
    </span>
    <h3 v-if="title">
      {{ title }}
    </h3>

    <slot></slot>

    <div v-if="tags" class="mb-4"></div> <!-- Margin element -->

    <div v-if="link || tags" class="absolute bottom-5 left-5 right-5">
      <div v-if="tags" class="uppercase font-bold text-xs mt-5 text-gray-300">
        <fa class="mr-1" :icon="faTag"></fa>
        <span v-for="(tag, i) in tags" v-bind:key="tag">
          <span v-if="i !== 0">, </span>
          {{ tag }}</span>
      </div>

      <div v-if="link" class="uppercase bg-default-700 font-bold text-xs -m-5 mt-5 text-gray-300 py-5 px-5
        transition group-hover:bg-accent group-hover:text-black">
        Read Article <fa class="ml-1 float-right" :icon="faArrowRight"></fa>
      </div>
    </div>
  </div>
</template>

<script>
import { faTag, faArrowRight, faCalendar } from "@fortawesome/free-solid-svg-icons";
export default {
  props: {
    title: {
      type: String,
      default: "Untitled"
    },
    image: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    },
    date: {
      type: String,
      default: null
    },
    tags: {
      type: Array,
      default: null
    }
  },
  data: function() {
    return {
      faTag,
      faArrowRight,
      faCalendar
    }
  }
}
</script>