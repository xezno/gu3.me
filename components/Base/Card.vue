<template>
  <div class="card">
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

<style lang="scss" scoped>
@import "~assets/variables.scss";

// bg-dark-800 border-dark-600 border-opacity-20 shadow-lg border border-solid rounded-lg p-5 my-10 overflow-hidden group
.card {
  background: $dark-800;
  border: 1px solid rgba( $dark-600, 0.2 );
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin: 40px 0;
  overflow: hidden;
}
</style>