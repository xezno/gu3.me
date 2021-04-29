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
  import { faGithub, faSnapchat, faDiscord, faSpotify, faKeybase, faYoutube } from "@fortawesome/free-brands-svg-icons";
  import { faEnvelope, faBlog } from "@fortawesome/free-solid-svg-icons";
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
  const faFacepunch = {
    prefix: "fac",
    iconName: "facepunch",
    icon: [
      216,
      216,
      [],
      [],
      "M108 0C48.4929 0 0 48.4929 0 108C0 167.507 48.4929 216 108 216C167.507 216 216 167.507 216 108C216 48.4929 167.66 0 108 0ZM108 191.83C61.8017 191.83 24.3229 154.351 24.3229 108.153C24.3229 61.9547 61.8017 24.4759 108 24.4759C154.198 24.4759 191.677 61.9547 191.677 108.153C191.677 154.351 154.198 191.83 108 191.83ZM102.952 95.302L85.6657 78.1688L72.9688 90.8657L60.7309 78.4748L43.4447 95.6079L55.8357 107.999L42.8328 121.002L60.1189 138.288L72.9688 125.285L86.2776 138.594L103.564 121.308L90.2549 107.999L102.952 95.302ZM172.708 94.8452L160.011 107.542L173.32 120.851L156.034 137.984L142.725 124.675L129.722 137.678L112.589 120.392L125.592 107.542L113.201 95.1512L130.334 77.865L142.725 90.256L155.422 77.5591L172.708 94.8452Z"
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
            link: "https://blog.gu3.me/",
            alt: "blog",
            icon: faBlog,
            class: "blog"
          },
          {
            link: "https://www.youtube.com/channel/UC1-J63RN0B71WiLyElpfCiQ",
            alt: "YouTube",
            icon: faYoutube,
            class: "youtube"
          },
          {
            link: "https://discord.com/users/345978018587607052",
            alt: "Discord",
            icon: faDiscord,
            class: "discord"
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

    // &.github:hover {
    //   // color: ;
    // }

    &.keybase:hover {
      color: #FF6F21 !important;
    }

    &.email:hover {
      color: #d43434 !important;
    }

    &.spotify:hover {
      color: #1DB954 !important;
    }

    &.snapchat:hover {
      stroke: black;
      color: #FFFC00 !important;
      stroke-opacity: 1;
    }

    &.uwutube:hover {
      color: #fe71dc !important;
    }

    &.youtube:hover {
      color: #FF0000 !important;
    }

    &.discord:hover {
      color: #7289DA !important;
    }

    &.facepunch:hover {
      color: #ec1b24 !important;
    }

    &.blog:hover {
      color: #2181ff !important;
    }
  }
</style>
