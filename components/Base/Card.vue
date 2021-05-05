<template>
  <div 
    class="shadow-md bg-default-700 border-default-600 border-solid border rounded-lg
      p-5 my-10 overflow-hidden min-w-1/3"
    :class="link ? 'cursor-pointer':''"
  >
    <div 
      v-if="image"
      :style="`background-image: url(${image});`" 
      class="h-64 bg-cover bg-center -mt-5 bg-default-600 -mx-5 mb-5"
    >
    </div>
    <span
      v-if="date"
      class="uppercase text-gray-300 font-bold text-sm"
    >
      {{date}}
    </span>
    <h2
      v-if="title"
      >
      {{title}}
    </h2>
    <slot></slot>

    <div v-if="tags" class="uppercase font-bold text-xs mt-5 text-gray-300">
      <fa :icon="faTag"></fa>
      <span v-for="(tag, i) in tags" v-bind:key="tag">
        <span v-if="i !== 0">, </span>
        {{ tag }}</span>
    </div>
  </div>
</template>

<script>
import { faTag } from "@fortawesome/free-solid-svg-icons";
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
      faTag
    }
  }
}
</script>