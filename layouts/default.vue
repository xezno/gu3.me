<template>
  <div>
    <Nuxt />
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageFooter from "~/components/Footer";
import Spotify from "~/components/Spotify";

export default {
  components: {
    PageFooter,
    Spotify
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&display=swap');

body {
  font-family: -apple-system, BlinkMacSystemFont, "Inter", sans-serif;

  line-height: 1.5;
  padding: 0;
  margin: 0;

  font-size: 14pt;
  font-weight: 400;

  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);

  animation: fadeIn 250ms ease;
}

html {
  transition: background 150ms ease, color 150ms ease;
}

html.dark-mode {
  background: #0E0E0E;
  color: #FFFFFF;
}

* {
  box-sizing: border-box;
}

h1 {
  font-weight: 900;
  margin-bottom: 1em;
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
