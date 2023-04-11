<template>
    <main>
        <section>
            <slot />
        </section>

        <Follower />
    </main>
</template>

<style lang="scss">
@import "@/assets/core.scss";

main {
    width: 100%;
    // max-width: 1280px;
    margin: auto;
    overflow: hidden;

    // Overlay noise image
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('/img/bluenoise.png');
        opacity: 1;
        mix-blend-mode: multiply;
        z-index: -1;
        background-size: 32px;
        animation: Noise 100ms ease infinite;
    }
}

section {
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    flex-direction: column;
}

//
// Animation
//
@keyframes Noise {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 100% 100%;
    }
}

//
// Light mode
//
@media (prefers-color-scheme: light) {
    main {
        &::before {
            // Tone down noise overlay
            opacity: 0.01;
        }
    }
}
</style>