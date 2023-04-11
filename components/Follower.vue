<template>
    <div :class="className">
        <div class="follower" :style="style"></div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            x: 0,
            y: 0,
            targetX: 0,
            targetY: 0,
            size: 1.0,
            targetSize: 1.0,
            opacity: 1.0,
            lastMoved: 0,
            isHovering: false,
        }
    },
    setup() {
        return {}
    },
    // Follow mouse
    mounted() {
        let lerp = (a, b, n) => (1 - n) * a + n * b;

        window.addEventListener('mousemove', (e) => {
            let x = e.clientX - 1024;
            let y = e.clientY - 1024;

            this.targetX = x;
            this.targetY = y;

            this.lastMoved = performance.now();

            // If the mouse is hovering over something clickable, don't show the follower
            let element = document.elementFromPoint(e.clientX, e.clientY);

            // Recursively check parents for clickable elements
            let isClickable = false;
            let isGlass = false;
            while (element) {
                if (element.tagName == 'A' || element.tagName == 'BUTTON') {
                    isClickable = true;
                    break;
                }

                if (element.className.indexOf('glass-panel') > -1) {
                    isGlass = true;
                    break;
                }

                element = element.parentElement;
            }

            this.isHovering = isClickable || isGlass;
        });

        let frameStart = performance.now();

        let onFrame = () => {
            let deltaTime = (performance.now() - frameStart) / 1000;

            this.x = lerp(this.x, this.targetX, deltaTime * 5);
            this.y = lerp(this.y, this.targetY, deltaTime * 5);
            this.targetSize = 1;

            // Size based on isHovering
            if (this.isHovering || this.isHoveringGlass) {
                this.targetSize *= 0.8;
            }

            this.targetSize = Math.min(1.5, this.targetSize);

            this.size = lerp(this.size, this.targetSize, deltaTime * 5);

            // Opacity based on time since last moved
            let timeSinceLastMoved = performance.now() - this.lastMoved;
            this.opacity = 1 - (timeSinceLastMoved / 1000);
            this.opacity = Math.max(0.2, this.opacity);

            frameStart = performance.now();
            requestAnimationFrame(onFrame);
        }

        requestAnimationFrame(onFrame);
    },
    computed: {
        style() {
            return {
                transform: `translate(${this.x}px, ${this.y}px) scale(${this.size})`,
                opacity: 0.5
            }
        },
        className() {
            let hovering = this.isHovering ? 'hovering' : '';
            return `wrapper ${hovering}`;
        }
    },
}
</script>

<style lang="scss" scoped>
.follower {
    position: fixed;
    top: 0;
    left: 0;
    width: 2048px;
    height: 2048px;
    z-index: -10;
    pointer-events: none;
    transition: backdrop-filter 150ms ease, opacity 150ms ease;
    background: radial-gradient(var(--theme-primary) 0%, transparent 50%);
    filter: blur(500px);
}

//
// Light mode
//
@media (prefers-color-scheme: light) {
    .follower {
        filter: opacity(25%);
    }
}
</style>