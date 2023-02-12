<template>
    <div class="intro">
        <div class="intro-inner">
            <div class="banner"></div>
            <h1 class="huge">
                Alex <span class="a">Guthrie</span><span class="b">GU3 <span class="cursor">_</span></span>
            </h1>

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
        position: relative;
        width: 100%;
        
        // Disable text selection
        user-select: none;

        .a, .b {
            position: absolute;
            left: 195px;
            top: 0;
            transition: all 150ms ease;
            pointer-events: none;
        }

        .a {
            opacity: 1;
            transform: translateY( 0px );
        }

        .b {
            opacity: 0;
            transform: translateY( -100px );
            font-family: monospace;
            background-color: #000111;
            padding: 0 40px;
            display: flex;

            .cursor {
                animation: blink 1s steps( 1, end ) infinite;
            }
        }

        &:hover {
            .a {
                opacity: 0;
                transform: translateY( 100px );
            }

            .b {
                opacity: 1;
                transform: translateY( 0px );
            }

        }

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

            background-color: $grey-900;
            background-image: url("/img/hero.png");
            background-repeat: no-repeat;
            background-position: right center;
            background-size: cover;

            // mix-blend-mode: soft-light;
            opacity: 1.0;
            filter: brightness(150%) saturate(50%);

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

            // Color overlay
            &::before {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                background-color: $grey-500;
                mix-blend-mode: multiply;
                opacity: 1.0;
            }

            z-index: -1;
        }
    }
}

@keyframes blink {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>