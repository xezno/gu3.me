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
          <p>I'm a 20 year old Computer Science student and software engineer from the United Kingdom interested in reverse 
            engineering, computer graphics, and game development.</p>
          <p>I'm currently working on projects involving s&amp;box, a game engine/framework designed around Source 2.</p>

          <social-links></social-links>
        </div>
      </section>
    </article>

    <div class="separator">
    </div>
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
  background: $dark-900;
  min-height: $hero-height;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  
  width: 100%;
  max-width: $screen-md;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media screen and (max-width: $screen-md) {
    height: 90vh;
  }
}

.left {
  flex-grow: 1;
  flex-shrink: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  min-height: $hero-height;
  position: relative;
  height: 100%;
  flex: 1 1 0px;

  @media screen and (max-width: $screen-md) {
    display: none;
  }
}

.right {
  padding: 16px;
  display: flex;

  flex: 1 1 30%;

  z-index: 10;
  height: auto;

  h1 {
    position: relative;
    width: fit-content;
    margin-bottom: 24px;

    &::after {
      content: ' ';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0px;
      height: 4px;
      background: $accent-500;
    }
  }

  hr {
    margin: 24px 0;
  }
}

.separator {
  height: 20px;
  width: 100%;
  background-color: $dark-1000;
}

.hero-image {
  position: absolute;
  overflow: hidden;
  border: 1px solid rgba( $dark-600, 0.2 );
  border-radius: 10px;
  height: 85%;
  aspect-ratio: 1;
  background-image: url( 'https://cdn.discordapp.com/attachments/839155256964284459/839820840659845120/70016038_473227283268995_7568323747035041244_n.png' );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>