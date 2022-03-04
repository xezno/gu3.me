<template>
  <div class="plus-bg">
    <div class="hero-wrapper">
      <article class="hero">
        <section class="left">
          <div style="background: url('https://cdn.discordapp.com/attachments/839155256964284459/839820840659845120/70016038_473227283268995_7568323747035041244_n.png') center/cover"
            class="hero-image"
          ></div>
        </section>
        
        <section class="right">
          <div>
            <h1>Alex Guthrie</h1>
            <div class="underline"></div>

            <p>Hey! I'm Alex.</p>
            <p>I'm a 20 year old Computer Science student and software engineer from the United Kingdom interested in reverse 
              engineering, computer graphics, and game development.</p>
            <p>I'm currently working on projects involving s&amp;box, a game engine/framework designed around Source 2.</p>

            <hr />

            <social-links></social-links>
          </div>
        </section>
      </article>
    </div>

    <div class="scroll-prompt">
      <p>
        Scroll for More <fa class="icon" :icon="faArrowDown"></fa>
      </p>
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

.hero-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px 1rem;
}

.hero {
  background: $dark-800;
  border: 1px solid rgba( $dark-600, 0.2 );
  min-height: $hero-height;
  display: flex;
  align-items: center;
  overflow: hidden;

  box-shadow: 0 0 10px rgba( black, 0.2 );
  position: relative;
  
  @media (min-width: $screen-md) {
    border-radius: 10px;
  }
}


.left {
  display: none;
  width: 0px;
  
  @media (min-width: $screen-md) {
    display: block;
    width: 50%;
  }

  min-height: $hero-height;
  position: relative;
  height: 100%;
  margin-right: 4px;
}

.right {
  padding: 16px;
  display: flex;
  width: 100%;

  @media (min-width: $screen-md) {
    width: 50%;
  }

  min-width: 350px;
  z-index: 10;
  height: auto;
  margin: 0 4px;

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
      height: 2px;
      background: $orange-500;
    }
  }

  hr {
    margin: 24px 0;
  }
}

.scroll-prompt {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 8rem;

  @media (min-width: $screen-md) {
    bottom: 0;
  }

  display: flex;
  justify-content: center;

  p {
    text-transform: uppercase;
    font-weight: bold;
    padding: 8px 16px;

    background: $dark-800;
    border-radius: 10px;
    border: 1px solid $dark-700;

    font-size: 14px;
  }

  .icon {
    animation: $animation-push-down;
    margin-left: 8px;
  }
}

.plus-bg {
  overflow: hidden;

  @media (min-width:768px) {
    background-color: #00000000;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23333333' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
}

.hero-image {
  @include scrimMask( black, "to right", 25, 100 );

  mask-repeat: no-repeat;
  mask-position: left;

  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>