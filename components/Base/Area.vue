<template>
  <div class="w-full">
    <h1 class="text-center">
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