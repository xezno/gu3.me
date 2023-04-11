<template>
    <div :class="className">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        shine: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        className() {
            let shine = (this.shine) ? 'shine' : 'no-shine';
            return `glass-panel ${shine}`;
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/core.scss";

.glass-panel {
    @include glass;
    border-radius: 10px;
    padding: 20px;

    font-weight: 700;
    transition: all 150ms ease;
    transition-delay: 50ms; // Prevent flickering when hovering over multiple cards

    &.shine {
        @include shine;
    }
}
</style>