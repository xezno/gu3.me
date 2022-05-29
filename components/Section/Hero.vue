<template>
  <div class="hero-wrapper">
    <article class="hero">
      <section class="left">
        <div class="hero-image"></div>
      </section>
      
      <section class="right">
        <div>
          <h1>Alex Guthrie</h1>
          <div class="underline"></div>

          <p>Hey! I'm Alex.</p>
          <p>I'm a Computer Science student and software engineer from the United Kingdom,
            <wbr>
            interested in reverse engineering, computer graphics, and game development.</p>
          <p>I currently work on projects involving s&amp;box, a game engine/framework designed around Source 2.</p>

          <social-links></social-links>
        </div>
      </section>
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
  min-height: $hero-height;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  
  width: 100%;
  max-width: $max-width;
  margin: 0 auto;
  padding: 1rem 1rem;
  
  @media screen and (max-width: $screen-md) {
    height: 90vh;
  }
}

.hero-wrapper {
  background: $dark-1000;
}

.left {
  width: fit-content;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  min-height: $hero-height;
  position: relative;
  height: 100%;
  flex: 1 1 0;

  padding-right: 40px;

  @media screen and (max-width: $screen-md) {
    display: none;
  }
}

.right {
  padding: 16px;
  padding-left: 32px;
  display: flex;

  flex: 1 1 400px;

  z-index: 10;
  height: auto;

  h1 {
    position: relative;
    width: fit-content;
    margin-bottom: 20px;
  }

  hr {
    margin: 20px 0;
  }
}

.hero-image {
  position: absolute;
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  max-height: 85%;
  aspect-ratio: 1;
  background-image: url( '/pfp2.png' );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>