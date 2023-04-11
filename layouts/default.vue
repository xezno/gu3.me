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
        opacity: 0.5;
        mix-blend-mode: multiply;
        z-index: -1;
    }
}

section {
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    flex-direction: column;
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