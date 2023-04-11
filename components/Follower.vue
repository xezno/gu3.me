<template>
    <div class="wrapper" :style="style">
        <div class="follower"></div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            x: 0,
            y: 0,
            targetX: 0,
            targetY: 0
        }
    },
    setup() {
        return {}
    },
    mounted() {
        let lerp = (a, b, n) => (1 - n) * a + n * b;

        //
        // Follow mouse
        //
        window.addEventListener('mousemove', (e) => {
            let x = e.clientX - 512;
            let y = e.clientY - 512;

            this.targetX = x;
            this.targetY = y;
        });

        let lastFrame = performance.now();

        let onFrame = () => {
            let deltaTime = (performance.now() - lastFrame) / 1000;

            this.x = lerp(this.x, this.targetX, deltaTime * 3);
            this.y = lerp(this.y, this.targetY, deltaTime * 3);

            lastFrame = performance.now();
            requestAnimationFrame(onFrame);
        }

        requestAnimationFrame(onFrame);
    },
    computed: {
        style() {
            return {
                transform: `translate(${this.x}px, ${this.y}px)`
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import "~~/assets/core.scss";

.wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -10;
    pointer-events: none;
}

.follower {
    position: fixed;
    top: 0;
    left: 0;
    width: 1024px;
    height: 1024px;
    z-index: -10;
    pointer-events: none;
    transition: backdrop-filter 150ms ease, opacity 150ms ease;
    background: radial-gradient(var(--theme-primary), transparent);
    border-radius: 100%;
    opacity: 0.6;
    filter: blur( 100px );
}

//
// Light mode
//
@media (prefers-color-scheme: light) {
    .follower {
        opacity: 0.2;
    }
}

//
// Mobile
//
@media (max-width: 768px) {
    .wrapper {
        display: none;
    }
}
</style>