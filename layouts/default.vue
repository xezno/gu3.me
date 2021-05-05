<template>
  <div class="">
    <Nuxt />
  </div>
</template>

<style>
@import url("~/assets/normalize.css");

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  @apply box-border;
}

@layer base {
  body {
    @apply text-base;

    @apply m-0;
    @apply animate-fade;

    @apply p-safe;
    @apply font-sans;

    @apply text-black;
    @apply bg-white;

    @apply leading-normal;
    @apply font-normal;

    &.dark {
      @apply text-white;
      @apply bg-gray-800;
      @apply font-350;
    }
  }

  a {
    @apply transition-colors;
    @apply no-underline;
    @apply text-inherit;
    &:hover {
      @apply text-gray-700;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-bold;
    @apply my-12;
    
    &.dark {
      @apply font-650;
    }
  }

  p {
    @apply mb-4;
  }
}
</style>