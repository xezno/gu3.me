<template>
  <div class="project-wrapper">
    <BaseCard :title="title" class="project">

      <div class="background" :style="`background-image: url('${ image }')`">
      </div>
      
      <slot></slot>
      
      <ul>
        <li>
          <h4>
            <fa :icon="faUser" />
            Role
          </h4>
          <p>{{ role }}</p>
        </li>
        <li>
          <h4>
            <fa :icon="faCog" />
            Made in
          </h4>
          <p>{{ madeIn }}</p>
        </li>
        <li>
          <h4>
            <fa :icon="faLink" />
            Link
          </h4>
          <a v-if="!comingSoon" :href="link">
            GitHub
            <fa :icon="faUpRightFromSquare" />
          </a>
          <a v-if="comingSoon" :href="link">
            Coming Soon
          </a>
        </li>
      </ul>
      
    </BaseCard>
  </div>
</template>

<script>
  import { faUser, faLink, faUpRightFromSquare, faCog } from "@fortawesome/free-solid-svg-icons";

  export default {
    props: {
      title: {
        type: String,
        default: "Untitled"
      },
      role: {
        type: String,
        default: "Lorem ipsum dolor sit amet"
      },
      madeIn: {
        type: String,
        default: "Lorem ipsum dolor sit amet"
      },
      image: {
        type: String,
        default: "https://via.placeholder.com/600x400"
      },
      link: {
        type: String,
        default: "https://github.com/apetavern/sbox-frostfight"
      },
      comingSoon: Boolean
    },
    data: function() {
      return {
        faUser,
        faLink,
        faUpRightFromSquare,
        faCog
      }
    }
  }
</script>

<style lang="scss">
@import "~assets/variables.scss";
@import "@/assets/scrimMask.scss";

.project-wrapper {
  flex: 1 1 100%;
}

.project {
  position: relative;
  margin: 0 !important;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  *:not(.background) {
    position: relative;
    z-index: 10;
  }

  ul {
    li {
      display: flex;
      align-items: center;

      > :first-child {
        margin-right: 8px;
      }

      h4, p {
        margin: 0;
      }

      h4 {
        width: 90px;
        color: $accent-500;

        > svg {
          width: 16px;
          align-items: center;
          justify-content: center;
          margin-right: 2px;

          color: $accent-500;
        }
      }
    }

    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

    margin: 0;
    width: 50%;
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