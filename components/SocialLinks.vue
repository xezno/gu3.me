<template>
    <div id="social">
        <ul>
            <li v-for="socialItem in socialList" v-bind:key="socialItem.link">
                <a :aria-label="socialItem.alt" :href="socialItem.link"><fa :icon="socialItem.icon"></fa></a>
            </li>
        </ul>
    </div>
</template>

<script>
    import { faGithub, faSnapchat, faTwitter, faSpotify, faKeybase } from "@fortawesome/free-brands-svg-icons";
    import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
    export default {
        data: function() {
            return {
                socialList: [
                    { "link": "https://github.com/xezno", alt: "GitHub", icon: faGithub },
                    { "link": "https://keybase.com/xezno", alt: "Keybase", icon: faKeybase },
                    { "link": "mailto:alex@gu3.me", alt: "Email", icon: faEnvelope },
                    { "link": "https://open.spotify.com/user/alexguthrie", alt: "Spotify", icon: faSpotify },
                    { "link": "https://twitter.com/ym2612", alt: "Twitter", icon: faTwitter },
                    { "link": "https://www.snapchat.com/add/alexguthrie01", alt: "Snapchat", icon: faSnapchat },
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
    }
}
</style>