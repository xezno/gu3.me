import { faGithub, faDiscord, faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBlog } from "@fortawesome/free-solid-svg-icons";

export const options = {
    name: "Alex Guthrie",
    intro: "Hey! I'm Alex. 👋\nI'm a programmer and game developer.\nI like reverse engineering, computer graphics, and game development.",
    copyright: "© Alex Guthrie 2023",
    email: "mailto:alex@gu3.me",
    avatar: "/img/me.png",

    socials: [
        {
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