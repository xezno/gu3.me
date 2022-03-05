<template>
  <div>
    <h2>
      {{ title }}
    </h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Untitled"
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/variables.scss";

h2 {
  text-align: center;
}
</style>