<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
@import url("~/assets/normalize.css");
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Inter", sans-serif;

    line-height: 1.5;
    padding: 0;
    margin: 0;

    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);

    animation: fadeIn 500ms ease;
  }

  html {
    transition: background 150ms ease, color 150ms ease;

    font-size: 16px;
    word-spacing: 1px;
    font-weight: 400;
      
    background: #FFFFFF;
    color: #202020;

    @media screen and (prefers-color-scheme: dark) {
      /* Dark mode */
      background: #202020;
      color: #ffffff;
      font-weight: 350; // Thinner font; easier to read on dark background
    }

    line-height: 1.5;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 1.5em 0;

    @media screen and (prefers-color-scheme: dark) {
      font-weight: 650;
    }
  }

  p {
    margin-bottom: 0.75em;
  }

  a {
    color: inherit;
    text-decoration: none;

    transition: color ease 150ms;

    &:hover {
        color: #888888;
    }
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
</style>
