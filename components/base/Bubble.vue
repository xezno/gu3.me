<template>
    <div class="bubble" :style="bubbleStyle">
        {{ randomEmoji }}
    </div>
</template>

<script>
export default {
    props: {
        x: {
            type: Number,
            required: true
        },
        y: {
            type: Number,
            required: true
        },
        size: {
            type: Number,
            required: true
        },
        color: {
            type: String,
            required: true
        }
    },
    computed: {
        randomEmoji() {
            // Find a random emoji
            const emojis = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚', '🙂', '🤗', '🤩', '🤔', '🤨', '😐'];
            const randomIndex = Math.floor(Math.random() * emojis.length);
            return emojis[randomIndex];
        },
        bubbleStyle() {
            return {
                left: `${this.x}%`,
                top: `${this.y}%`,
                width: `${this.size}px`,
                height: `${this.size}px`,
                fontSize: `${this.size * 0.8}px`,
            };
        }
    }
};
</script>


<style lang="scss" scoped>
@import "@/assets/core.scss";

.bubble {
    @include glass($grey-700, $grey-800);
    padding: 10px;

    font-size: 2rem;
    font-weight: 700;

    border-radius: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    z-index: -100;

    opacity: 0.8;
}
</style>