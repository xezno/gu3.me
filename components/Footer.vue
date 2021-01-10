<template>
    <div id="footer">
        <div id="left">
            <p>Copyright <fa :icon="faCopyright"></fa> Alex Guthrie {{ new Date().getFullYear() }}</p>
        </div>
        <div id="right">
            <a href="https://github.com/xezno/gu3.me"><fa :icon="faGithub"></fa> Explore Source on GitHub</a>
        </div>
    </div>
</template>

<script>
    import { faGithub } from "@fortawesome/free-brands-svg-icons";
    import { faCopyright } from "@fortawesome/free-solid-svg-icons";
    export default {
        computed: {
            faGithub() { return faGithub; },
            faCopyright() { return faCopyright; }
        }
    }
</script>

<style lang="scss" scoped>
    #footer {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: auto;
        padding: 20px 25px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;

        font-size: 12pt;

        & #left, #right {
            display: flex;
            justify-content: center;
            align-items: center;
            height: auto;
            margin: 0;
            padding: 0;

            & * {
                margin: 0;
                padding: 0;
            }
        }

        
        @media (max-width: 1024px) { 
            flex-wrap: wrap;

            & #left, #right {
                width: 100%;
            }
        }
    }
</style>