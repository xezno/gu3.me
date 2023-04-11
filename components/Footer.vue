<template>
    <footer>
        <div class="inner">
            <div class="left">
                &copy; Alex Guthrie 2022
            </div>
            <div class="right">
                <BaseSocialLinks></BaseSocialLinks>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "@/assets/core.scss";

footer {
    text-align: center;
    font-weight: bold;
    padding: 0;
    text-transform: uppercase;
    padding: 10px 0;
    width: 100%;

    justify-content: space-around;

    .inner {
        display: flex;
        max-width: 1280px;
        width: 100%;
        align-items: center;
        margin: auto;
        justify-content: space-between;
        padding: 0 1rem;
        align-items: center;
        min-height: 50px;
    }

    .left {
        width: 100%;
        margin: 0 auto;

        text-align: left;
        width: fit-content;
        margin: 0;
    }

    .right {
        display: none;
        margin: 0 auto;
        width: 0;

        display: block;
        width: auto;
        margin: 0;
        text-align: right;
    }
}
@media (max-width: $mobile) {
    footer {
        .inner {
            width: 100%;
            max-width: unset;
            padding: 0;
            justify-content: center;

            .social-links {
                display: none;
            }
        }
    }
}
</style>