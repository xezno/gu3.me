@@ -0,0 +1,46 @@
<template>
    <div class="separator">
        <div class="cap left"></div>
        <div class="cap right"></div>
    </div>
</template>

<style lang="scss" scoped>
.separator {
    width: 100%;
    height: 2px;
    background-color: var(--theme-border-light);
    position: relative;

    .cap {
        $size: 16px;
        position: absolute;
        top: 0;
        height: 100%;
        width: $size;
        background-color: var(--theme-border);
        opacity: 1;

        &::after {
            content: "";
            position: absolute;
            left: 0;
            width: 2px;
            height: $size;
            top: 1px;
            transform: translate( 0, -50%);
            background-color: var(--theme-border);
            opacity: 1;
        }
    }

    .cap.left {
        left: 0;
    }

    .cap.right {
        right: 0;
        transform: rotate( 180deg );
    }
}
</style>
No newline at end of file
