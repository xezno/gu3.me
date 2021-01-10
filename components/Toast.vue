<template>
    <div class="toast">
        <div id="image-container">
            <img src="/heavy-drip.webp" />
        </div>
        <div id="text-container">
            <h3>{{ title }}</h3>
            <p><slot></slot></p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String
        }
    }
</script>

<style lang="scss" scoped>
    .toast {
        width: 500px;
        height: 125px;
        background: #0A0A0A;
        border: 1px solid #fe71dc;
        padding: 5px 10px;
        border-radius: 15px;
        margin: 25px;
        display: flex;
        justify-content: center;
        align-items: center;

        & #image-container {
            width: 96px;
            height: 96px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            float: left;
            align-self: left;
            margin: 15px;
        }

        & #text-container {
            width: calc(100% - 96px - 15px);
        }
    }
</style>