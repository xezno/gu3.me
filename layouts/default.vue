<template>
    <main>
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
}

section {
    display: flex;
    gap: 20px;
    justify-content: stretch;
    align-items: stretch;
    flex-direction: column;
}
</style>