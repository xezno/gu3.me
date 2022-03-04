<template>
  <div class="wrapper">
    <BaseCard :title="title" class="project">
      <ul>
        <li>
          <h4>Role</h4>
          <h4>{{ role }}</h4>
        </li>
        <li>
          <h4>Link</h4>
          <h4>{{ link }}</h4>
        </li>
      </ul>
      
      <div class="background" style="background-image: url('https://source.unsplash.com/random/?landscape')">
      </div>
      
      <slot></slot>
    </BaseCard>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: "Untitled"
      },
      role: {
        type: String,
        default: "Lorem ipsum dolor sit amet..."
      },
      image: {
        type: String,
        default: "https://via.placeholder.com/600x400"
      },
      link: {
        type: String,
        default: "https://github.com/apetavern/sbox-frostfight"
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "~assets/variables.scss";
@import "@/assets/scrimMask.scss";

.wrapper {
  width: 100%;
  margin: 12px;
  padding: 0 10px;
  
  @media screen and (min-width: $screen-md) {
    width: 50%;
    margin: 8px 0;
  }
}

.project {
  position: relative;
  margin: 0 !important;
  
  .background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

    margin: 0;
    width: 25%;
    background-size: cover;
    background-position: center;
    transition: all 150ms ease;

    opacity: 0.4;

    transform: scale( 1.0 );

    @include scrimMask( black, "to left" );
    min-width: 200px;
  }
}

</style>