<template>
  <article id="main-article">
    <div id="left">
      <img src="/heavy drip.png" height="500">
    </div>
    <div id="right">
      <span>
        <h1>Alex Guthrie</h1>
        <p>Hey! I'm Alex.</p>
        <p>I'm a 19 year old software engineer interested in reverse engineering, computer graphics, and machine learning.</p>
        <p>I love programming, playing video games, tennis, piña coladas, and getting caught in the rain.</p>
        <social-links></social-links>
      </span>
    </div>
  </article>
</template>

<script>
import Spotify from '~/components/Spotify.vue'
export default {
  components: { Spotify },
}
</script>

<style lang="scss">
#main-article {
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;

  & img {
    border-radius: 15px;
  }

  & #left {
    width: 25vw;
    text-align: right;
  }

  & #right {
    width: 25vw;
    text-align: left;
  }

  & #left, #right {
    padding: 15px;
  }

  @media (max-width: 1024px) {
    & #left, #right {
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: nowrap;
    }

    & #left {
      display: none;
    }
  }
}
</style>
