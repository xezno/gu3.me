<template>
    <Nav></Nav>

    <main>
        <section>
            <slot />
        </section>
        <Footer></Footer>
    </main>
</template>

<style lang="scss">
@import "@/assets/core.scss";

main {
    width: 100%;
    height: calc(100vh - 20px);
    max-width: 1280px;
    margin: auto;
}

section {
    display: flex;
    gap: 20px;
    justify-content: stretch;
    align-items: stretch;
    flex-direction: column;
}
</style>