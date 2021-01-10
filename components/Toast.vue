<template>
    <div class="toast">
        <div id="image-container">
            <img src="/heavy drip.png" />
        </div>
        <div id="text-container">
            <h3>Toast Title</h3>
            <p>Toast Text: Lorem Ipsum Dolor Sit Amet.</p>
        </div>
    </div>
</template>

<script>
    export default {
        
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
    }
</style>