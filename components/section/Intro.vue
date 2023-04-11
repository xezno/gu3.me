<template>
    <div class="intro">
        <div class="intro-inner">
            <div class="avatar"></div>
            <h1>Alex Guthrie</h1>

            <BaseSocialLinks></BaseSocialLinks>

            <p>👋 Hey! I'm Alex.<br>
                I'm a Programmer at Acme Inc.<br>
                I like reverse engineering, computer graphics, and game development.</p>
        </div>
    </div>
</template>

<script>
import { career } from '~~/data/career.js';

export default {
    computed: {
        currentJobCompany() {
            return career[career.length - 1].company;
        },
        currentJobTitle() {
            return career[career.length - 1].title;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/core.scss";

.intro {
    height: 100vh;
    width: 100%;

    overflow: hidden;
    padding: 0 50px;
    position: relative;

    @include glass-internal(0px);

    .avatar {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin-bottom: 20px;
        background-image: url("/img/me.png");
        background-size: cover;
        background-position: center;
    }

    .intro-inner {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        height: 100%;
        width: 100%;

        gap: 20px;

        .banner {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            height: 100vh;

            background-color: var(--theme-900);
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
                background-color: var(--theme-500);
                mix-blend-mode: multiply;
                opacity: 1.0;
            }

            z-index: -1;
        }
    }

}

@media (max-width: $mobile) {
    .intro {
        padding: 0 20px;
        overflow: unset;

        height: 75vh;

        .intro-inner {
            align-items: center;
            justify-content: center;
            text-align: center;
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
}</style>