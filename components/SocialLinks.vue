<template>
  <div id="social">
    <ul>
      <li v-for="socialItem in socialList" v-bind:key="socialItem.link">
        <a :aria-label="socialItem.alt" :href="socialItem.link" :class="socialItem.class">
          <fa :icon="socialItem.icon"></fa>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { faGithub, faSnapchat, faTwitter, faSpotify, faKeybase } from "@fortawesome/free-brands-svg-icons";
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
  const faUwutube = {
    prefix: "fac",
    iconName: "uwutube",
    icon: [
      512,
      512,
      [],
      [],
      "M 256.42773 1.5 A 255.99999 255.99999 0 0 0 0.42773438 257.5 A 255.99999 255.99999 0 0 0 256.42773 513.5 A 255.99999 255.99999 0 0 0 512.42773 257.5 A 255.99999 255.99999 0 0 0 256.42773 1.5 z M 184.77539 178.17578 L 238.40039 178.17578 L 223.82422 260.94922 C 223.45755 262.59922 223.27539 264.89088 223.27539 267.82422 C 223.27539 274.60756 225.10872 279.92539 228.77539 283.77539 C 232.62539 287.44206 237.94127 289.27539 244.72461 289.27539 C 252.79128 289.27539 259.57421 286.70756 265.07422 281.57422 C 270.75756 276.44088 274.42422 269.19962 276.07422 259.84961 L 276.07422 261.22461 L 290.65039 178.17578 L 344.82422 178.17578 L 317.59961 332.44922 L 263.42578 332.44922 L 267.82422 306.875 C 261.77421 315.125 254.07462 321.72577 244.72461 326.67578 C 235.55794 331.44245 225.38256 333.82422 214.19922 333.82422 C 199.34921 333.82422 187.80079 329.51706 179.55078 320.90039 C 171.30078 312.28372 167.17578 300.27501 167.17578 284.875 C 167.17578 279.375 167.72422 273.60079 168.82422 267.55078 L 184.77539 178.17578 z "
    ]
  }

  export default {
    data: function () {
      return {
        socialList: [{
            link: "https://github.com/xezno",
            alt: "GitHub",
            icon: faGithub,
            class: "github"
          },
          {
            link: "https://keybase.io/xezno",
            alt: "Keybase",
            icon: faKeybase,
            class: "keybase"
          },
          {
            link: "mailto:alex@gu3.me",
            alt: "Email",
            icon: faEnvelope,
            class: "email"
          },
          {
            link: "https://open.spotify.com/user/alexguthrie",
            alt: "Spotify",
            icon: faSpotify,
            class: "spotify"
          },
          {
            link: "https://twitter.com/ym2612",
            alt: "Twitter",
            icon: faTwitter,
            class: "twitter"
          },
          {
            link: "https://www.snapchat.com/add/alexguthrie01",
            alt: "Snapchat",
            icon: faSnapchat,
            class: "snapchat"
          },
          {
            link: "https://uwutube.co/",
            alt: "uwutube",
            icon: faUwutube,
            class: "uwutube"
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
    padding: 0;
    display: flex;

    & li {
      padding: 0 10px;
      font-size: 16pt;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }

      & img {
        padding: 0;
        margin: 0;
      }
    }
  }

  a {
    &.snapchat {
      // Stops the snapchat icon from blinding people in light mode
      stroke: black;
      stroke-width: 20px;
      stroke-opacity: 0;

      transition: all 150ms ease;
    }

    &.github:hover {
      // color: ;
    }

    &.keybase:hover {
      color: #FF6F21 !important;
    }

    &.email:hover {
      color: #d43434 !important;
    }

    &.spotify:hover {
      color: #1DB954 !important;
    }

    &.twitter:hover {
      color: #1DA1F2 !important;
    }

    &.snapchat:hover {
      stroke: black;
      color: #FFFC00 !important;
      stroke-opacity: 1;
    }

    &.uwutube:hover {
      color: #fe71dc !important;
    }
  }
</style>
