<template>
    <main>
        <slot />

        <div style="position: absolute; top: 0; left: 0;
        right: 0; bottom: 0; z-index: -1000; overflow: hidden;">
            <BaseBubble v-for="bubble in bubbles" :key="bubble.id" :x="bubble.x" :y="bubble.y" :size="bubble.size"
                :color="bubble.color" />
        </div>
    </main>
</template>

<script>

export default {
    components: {
        BaseBubble: () => import('~/components/base/Bubble.vue')
    },
    data: function () {
        return {
            bubbles: [],
            bubbleCount: 10
        }
    },
    methods: {
        createBubbles: function () {
            for (let i = 0; i < this.bubbleCount; i++) {
                this.bubbles.push({
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: 25 + (Math.random() * 100),
                    color: `hsl(${Math.random() * 360}, 100%, 50%)`
                });
            }
        }
    },
    mounted: function () {
        this.createBubbles();
    }
};

</script>

<style lang="scss">
@import "@/assets/core.scss";
</style>