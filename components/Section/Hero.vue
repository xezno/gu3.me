<template>
  <div class="hero-wrapper">
    <article class="hero">

        <div class="hero-image"></div>

        <h1>Alex Guthrie</h1>
        <social-links></social-links>

        <hr/>

        <p>👋 Hey! I'm Alex.</p>
        <p>I'm a Computer Science student and software engineer from the United Kingdom, <wbr>
          interested in reverse engineering, computer graphics, and game development.</p>
        <p>I currently work on projects involving s&amp;box, a game engine/framework designed <wbr>
          around Source 2.</p>
        <hr/>

    </article>
  </div>
</template>

<script>
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
export default {
  data: function() {
    return {
      faArrowDown
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/variables.scss";
@import "@/assets/scrimMask.scss";

.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  margin: 0 auto;
  padding: 20px 1rem;

  flex-direction: column;

  max-width: calc( $max-width / 1.5 );
  text-align: center;

  padding-bottom: 40px;

  min-height: 66vh;

  @media (max-width: 768px) {
    height: calc( 100vh - 25px );
  }
}

.hero-wrapper {
  background: $dark-1000;
}

.hero-image {
  overflow: hidden;
  width: 256px;
  aspect-ratio: 1;
  background-image: url( '/me.png' );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    width: 128px;
  }
}

h1 {
  position: relative;
  width: fit-content;
  margin: 5px 0;
  margin-top: 10px;
}
</style>