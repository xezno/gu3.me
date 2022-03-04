<template>
  <div>
    <h1>
      {{ title }}
    </h1>
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

h1 {
  text-align: center;
}
</style>