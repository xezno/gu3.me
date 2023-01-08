<template>
    <div class="glass-panel">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/core.scss";

.glass-panel {
    @include glass($grey-700, $grey-800);
    border-radius: 10px;
    padding: 10px;

    font-weight: 700;
}
</style>