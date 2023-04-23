<template>
  <ul class="social-links">
    <li v-for="socialItem in socialList" v-bind:key="socialItem.link">
      <a :aria-label="socialItem.alt" :href="socialItem.link" :class="socialItem.class" :data-tip="socialItem.alt">
        <font-awesome-icon :icon="socialItem.icon" />
      </a>
    </li>
  </ul>
</template>
  
<script>
import * as options from "~~/data/options.json";

export default {
  data: function () {
    return {
      socialList: options.socials
    }
  }
}
</script>
  
<style lang="scss" scoped>
@import "@/assets/core.scss";

ul {
  list-style: none;
  padding: 0;
  display: flex;
  width: auto;
  gap: 20px;
  margin: 0;
}

li {
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: 16pt;
}

.text-github:hover {
  color: $text-github;
}

.text-email:hover {
  color: $text-email;
}

.text-spotify:hover {
  color: $text-spotify;
}

.text-blog:hover {
  color: $text-blog;
}

.text-youtube:hover {
  color: $text-youtube;
}

.text-discord:hover {
  color: $text-discord;
}

.text-twitter:hover {
  color: $text-twitter;
}
</style>