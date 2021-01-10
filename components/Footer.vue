<template>
    <div id="footer">
        <div id="left">
            <p>Copyright (C) Alex Guthrie {{ new Date().getFullYear() }}</p>
        </div>
        <div id="right">
            <a href="https://github.com/xezno/gu3.me">Explore Source on GitHub</a>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    #footer {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: auto;
        padding: 20px 25px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;

        font-size: 12pt;

        & #left, #right {
            display: flex;
            justify-content: center;
            align-items: center;
            height: auto;
            margin: 0;
            padding: 0;

            & * {
                margin: 0;
                padding: 0;
            }
        }
    }
</style>