<template>
    <div class="glass-panel">
        <slot></slot>

        <div class="thing"></div>
    </div>
</template>

<script>
export default {
    mounted: function () {
        // Move thing with mouse
        let glassPanel = this.$el;
        let thing = glassPanel.querySelector(".thing");

        // Shift thing by default
        let rect = glassPanel.getBoundingClientRect();
        let pos = { x: rect.x, y: rect.y };
        let length = Math.sqrt(pos.x * pos.x + pos.y * pos.y);

        // Normalize rect
        pos.x = pos.x / length;
        pos.y = pos.y / length;

        pos.x -= 0.5;
        pos.y -= 0.5;

        pos.x *= 250;
        pos.y *= 250;
        console.log(pos);

        thing.style.transform = `translate(${pos.x}px, ${pos.y}px)`;

        glassPanel.addEventListener("mousemove", function (e) {
            thing.style.transform = `translate(0px, 0px)`;
        });

        glassPanel.addEventListener("mouseout", function (e) {
            thing.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
        });
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/core.scss";

.glass-panel {
    @include glass($grey-700, $grey-800);
    border-radius: 10px;
    padding: 20px;

    font-weight: 700;
    transition: all 150ms ease;
    transition-delay: 50ms; // Prevent flickering when hovering over multiple cards

    &:hover {
        @include glass($grey-500, $grey-700);
        box-shadow: 0 0 100px 0 rgba(0, 0, 0, 0.25);
        transition-delay: 0ms;

        .thing {
            opacity: 1;
        }
    }
    
    overflow: hidden;
}

.thing {
    $border-col: white;
    $border-thickness: 4px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
        linear-gradient(to right, $border-col $border-thickness, transparent $border-thickness) 0 0,
        linear-gradient(to right, $border-col $border-thickness, transparent $border-thickness) 0 100%,
        linear-gradient(to left, $border-col $border-thickness, transparent $border-thickness) 100% 0,
        linear-gradient(to left, $border-col $border-thickness, transparent $border-thickness) 100% 100%,
        linear-gradient(to bottom, $border-col $border-thickness, transparent $border-thickness) 0 0,
        linear-gradient(to bottom, $border-col $border-thickness, transparent $border-thickness) 100% 0,
        linear-gradient(to top, $border-col $border-thickness, transparent $border-thickness) 0 100%,
        linear-gradient(to top, $border-col $border-thickness, transparent $border-thickness) 100% 100%;
    background-repeat: no-repeat;
    background-size: 20px 20px;
    transition: all 150ms ease;
    pointer-events: none;
    opacity: 0;

    z-index: 10;

    &.active {
        opacity: 1;
    }
}
</style>