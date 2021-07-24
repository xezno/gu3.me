<template>
  <div 
    class="shadow-md bg-default-800 border-default-600 border border-solid rounded-lg
      p-5 my-10 overflow-hidden group">
    <h3 v-if="title">
      {{ title }}
    </h3>

    <slot></slot>
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