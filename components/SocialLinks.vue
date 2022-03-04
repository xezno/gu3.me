<template>
  <ul>
    <li v-for="socialItem in socialList" v-bind:key="socialItem.link">
      <a :aria-label="socialItem.alt" :href="socialItem.link" :class="socialItem.class">
        <fa :icon="socialItem.icon"></fa>
      </a>
    </li>
  </ul>
</template>

<script>
  import { faGithub, faDiscord, faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons";
  import { faEnvelope, faBlog } from "@fortawesome/free-solid-svg-icons";

  export default {
    data: function () {
      return {
        socialList: [{
            link: "https://github.com/xezno",
            alt: "GitHub",
            icon: faGithub,
            class: "text-github"
          },
          {
            link: "mailto:alex@gu3.me",
            alt: "Email",
            icon: faEnvelope,
            class: "text-email"
          },
          {
            link: "https://open.spotify.com/user/alexguthrie",
            alt: "Spotify",
            icon: faSpotify,
            class: "text-spotify"
          },
          {
            link: "https://blog.gu3.me/",
            alt: "blog",
            icon: faBlog,
            class: "text-blog"
          },
          {
            link: "https://www.youtube.com/channel/UC1-J63RN0B71WiLyElpfCiQ",
            alt: "YouTube",
            icon: faYoutube,
            class: "text-youtube"
          },
          {
            link: "https://discord.com/users/345978018587607052",
            alt: "Discord",
            icon: faDiscord,
            class: "text-discord"
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "~assets/variables.scss";

ul {
  list-style: none;
  padding: 0;
  display: flex;
  width: auto;
}

li {
  padding: 0;
  margin: 0;
  margin-right: 20px;
  text-align: center;
  font-size: 16pt;
}

.text-github:hover {
  color: $text-github;
}

.text-email:hover {
  color: $text-email;
}

.text-spotify:hover {
  color: $text-spotify;
}

.text-blog:hover {
  color: $text-blog;
}

.text-youtube:hover {
  color: $text-youtube;
}

.text-discord:hover {
  color: $text-discord;
}
</style>