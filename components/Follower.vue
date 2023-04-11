<template>
    <div :class="className">
        <div class="follower" :style="style"></div>
        <div class="crosshair" ref="crosshair">
            <div class="el 1"></div>
            <div class="el 2"></div>
            <div class="el 3"></div>
            <div class="el 4"></div>
        </div>
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
            isHoveringGlass: false,

            hoveringElement: null
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
                    this.hoveringElement = element;
                    break;
                }

                if (element.className.indexOf('glass-panel') > -1) {
                    isGlass = true;
                    this.hoveringElement = element;
                    break;
                }

                element = element.parentElement;
            }

            this.isHoveringGlass = isGlass;
            this.isHovering = isClickable;
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

            // Move crosshair to cover the hovering element
            if (this.isHovering || this.isHoveringGlass) {
                let crosshair = this.$refs.crosshair;
                let rect = this.hoveringElement.getBoundingClientRect();
                let distance = 8;

                crosshair.style.left = rect.left - distance + 'px';
                crosshair.style.top = rect.top - distance + 'px';
                crosshair.style.width = rect.width + distance * 2 + 'px';
                crosshair.style.height = rect.height + distance * 2 + 'px';
            } else {
                // Position at cursor
                let crosshair = this.$refs.crosshair;
                crosshair.style.left = this.x + 'px';
                crosshair.style.top = this.y + 'px';
            }

            frameStart = performance.now();
            requestAnimationFrame(onFrame);
        }

        requestAnimationFrame(onFrame);
    },
    computed: {
        style() {
            return {
                transform: `translate(${this.x}px, ${this.y}px) scale(${this.size})`,
                opacity: 0.2
            }
        },
        className() {
            let hovering = this.isHovering ? 'hovering' : '';
            let hoveringGlass = this.isHoveringGlass ? 'hovering-glass' : '';
            return `${hovering} ${hoveringGlass}`;
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
    z-index: 1000;
    border-radius: 50%;
    pointer-events: none;
    z-index: -5;
    transition: backdrop-filter 150ms ease, opacity 150ms ease;
    background: radial-gradient(var(--theme-primary) 0%, transparent 100%);
    filter: blur(500px);
}

.hovering,
.hovering-glass {
    .crosshair {
        opacity: 0;
    }
}

.crosshair {
    position: fixed;
    top: 0;
    left: 0;
    width: 64px;
    height: 64px;
    z-index: 1000;
    font-weight: bold;
    pointer-events: none;
    z-index: 5;

    opacity: 0;
    transition: all 100ms ease;

    // Display 4 corners
    .el {
        position: absolute;
        width: 16px;
        height: 16px;
        border: 2px solid var(--theme-primary);
        opacity: 0.5;
        border-right: 0;
        border-bottom: 0;
        transition: all 150ms ease;
    }

    .el:nth-of-type(1) {
        top: 0;
        left: 0;
        transform: rotate(0deg);
    }

    .el:nth-of-type(2) {
        top: 0;
        right: 0;
        transform: rotate(90deg);
    }

    .el:nth-of-type(3) {
        bottom: 0;
        left: 0;
        transform: rotate(270deg);
    }

    .el:nth-of-type(4) {
        bottom: 0;
        right: 0;
        transform: rotate(180deg);
    }
}
</style>