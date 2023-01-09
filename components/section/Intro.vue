<template>
    <div class="intro">
        <div class="intro-inner">
            <div class="banner"></div>
            <h1 class="huge">Alex Guthrie</h1>

            <BaseSocialLinks></BaseSocialLinks>

            <p>👋 Hey! I'm Alex.<br>
                I'm a Computer Science student and software engineer from the United
                Kingdom, interested in reverse engineering, computer graphics, and game development.</p>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            // Effect: fade and shift the background as the user scrolls down
            const intro = document.querySelector('.intro');
            const banner = document.querySelector('.banner');

            const scroll = window.scrollY;
            const height = intro.clientHeight;

            const opacity = 1 - (scroll / height);
            const shift = scroll / 2;

            banner.style.opacity = opacity;
            banner.style.backgroundPosition = `right ${shift}px`;
        }
    },
    setup() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/core.scss";

.intro {
    padding-top: 0px;
    margin-top: -150px;
    height: 100vh;

    overflow: hidden;

    h1.huge {
        font-size: 5rem;
        font-weight: 700;
        color: #fff;
    }

    .intro-inner {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        height: 100%;
        width: 100%;
        max-width: 50%;

        gap: 20px;

        text-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);

        .banner {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            height: 100vh;

            background-color: #000111;
            background-image: url("/img/hero.png");
            background-repeat: no-repeat;
            background-position: right center;
            background-size: cover;

            // mix-blend-mode: soft-light;
            opacity: 1.0;
            filter: brightness(50%) saturate(25%);

            // Noise overlay
            &::after {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                background-image: url("/img/bluenoise.png");
                background-size: auto;
                image-rendering: pixelated;
                background-repeat: repeat;
                mix-blend-mode: overlay;
                opacity: 0.25;
            }

            z-index: -1;
        }
    }
}
</style>