<template>
  <div class="mt-12">
    <ul class="list-none p-0 flex">
      <li class="p-0 m-0 mr-5 text-xl" v-for="socialItem in socialList" v-bind:key="socialItem.link">
        <a :aria-label="socialItem.alt" :href="socialItem.link" :class="socialItem.class">
          <fa :icon="socialItem.icon"></fa>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { faGithub, faDiscord, faSpotify, faKeybase, faYoutube } from "@fortawesome/free-brands-svg-icons";
  import { faEnvelope, faBlog } from "@fortawesome/free-solid-svg-icons";

  export default {
    data: function () {
      return {
        socialList: [{
            link: "https://github.com/xezno",
            alt: "GitHub",
            icon: faGithub,
            class: "hover:text-default-500"
          },
          {
            link: "https://keybase.io/xezno",
            alt: "Keybase",
            icon: faKeybase,
            class: "hover:text-keybase"
          },
          {
            link: "mailto:alex@gu3.me",
            alt: "Email",
            icon: faEnvelope,
            class: "hover:text-email"
          },
          {
            link: "https://open.spotify.com/user/alexguthrie",
            alt: "Spotify",
            icon: faSpotify,
            class: "hover:text-spotify"
          },
          {
            link: "https://blog.gu3.me/",
            alt: "blog",
            icon: faBlog,
            class: "hover:text-blog"
          },
          {
            link: "https://www.youtube.com/channel/UC1-J63RN0B71WiLyElpfCiQ",
            alt: "YouTube",
            icon: faYoutube,
            class: "hover:text-youtube"
          },
          {
            link: "https://discord.com/users/345978018587607052",
            alt: "Discord",
            icon: faDiscord,
            class: "hover:text-discord"
          }
        ]
      }
    }
  }
</script>
