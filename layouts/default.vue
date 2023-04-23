<template>
    <main>
        <!-- <div class="background"></div>-->
        <section>
            <slot />
        </section>
    </main>
</template>

<style lang="scss">
@import "@/assets/core.scss";

main {
    width: 100%;
    // max-width: 1280px;
    margin: auto;
    overflow: hidden;

    animation: fade-in 1s ease-out both;
    animation-delay: 0.5s;

    > .background {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-image: url("/img/bg/dark.png");
        pointer-events: none;
        z-index: -999;

        @media (prefers-color-scheme: light) {
            background-image: url("/img/bg/light.png");
        }
    }

    > section {
        backdrop-filter: brightness( 0.5 );

        @media (prefers-color-scheme: light) {
            backdrop-filter: saturate( 0.5 );
        }
    }
}

section {
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    flex-direction: column;
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>