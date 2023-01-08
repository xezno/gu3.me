<template>
  <div class="project-wrapper">
    <BaseCard :title="title" class="project">

      <div class="project-inner">

        <div class="left">

          <p>{{ description }}</p>

          <span class="spacer"></span>

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
              <a :href="link">
                GitHub
                <fa :icon="faUpRightFromSquare" />
              </a>
            </li>
            <li v-if="blogLink">
              <h4>
                <fa :icon="faBlog" />
                Blog
              </h4>
              <a :href="blogLink">
                Latest Post
                <fa :icon="faUpRightFromSquare" />
              </a>
            </li>
          </ul>

        </div>

        <div class="right">

          <div class="background" :style="`background-image: url('${image}')`">
          </div>

        </div>
      </div>

    </BaseCard>
  </div>
</template>

<script>
import { faUser, faLink, faUpRightFromSquare, faCog, faBlog } from "@fortawesome/free-solid-svg-icons";

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
    blogLink: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  },
  data: function () {
    return {
      faUser,
      faLink,
      faUpRightFromSquare,
      faCog,
      faBlog
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
  height: 100%;
  position: relative;
  margin: 0 !important;

  .project-inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;

    .left {
      flex-grow: 1;
      flex-shrink: 1;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .right {
      margin-top: -30px;
      flex-grow: 0;
      flex-shrink: 0;

      flex-basis: 30%;
    }
  }

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

      h4,
      p {
        margin: 0;
      }

      h4 {
        width: 90px;
        color: $accent-500;

        >svg {
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
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transform: scale(1.0);
    opacity: 1;

    mask-image: none;

    background-color: $dark-700;
    border-radius: 8px;

    border: 1px solid rgba($dark-600, 0.2);
  }

  .spacer {
    flex-grow: 1;
  }
}

.project-wrapper.small {
  flex-basis: 40%;
  flex-grow: 1;
  flex-shrink: 1;
  height: auto;
  align-self: stretch;

  // Display card content vertically
  .project {
    flex-direction: column;
    align-items: stretch;

    .project-inner {
      flex-direction: column-reverse;
      justify-content: space-between;
      height: 100%;
      gap: 0;

      .left {
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: auto;

        ul {
          justify-self: flex-end;
          margin-top: -30px;
          margin-bottom: 30px;
        }
      }

      .right {
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: auto;
        
        margin-top: 10px;
        margin-bottom: 10px;

        aspect-ratio: 2;
      }
    }
  }
}
</style>