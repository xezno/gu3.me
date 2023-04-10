<template>
    <div class="glass-panel">
        <slot></slot>
    </div>
</template>

<script>
// Fade other glass panels when hovering over one

export default {
    mounted: function () {
        //
        // Fade out other cards when hovering
        //
        const projects = document.querySelectorAll('.glass-panel');
        projects.forEach(project => {
            project.addEventListener('mouseenter', () => {
                projects.forEach(otherProject => {
                    if (otherProject !== project) {
                        otherProject.classList.add('fade');
                    }
                });
            });
            project.addEventListener('mouseleave', () => {
                projects.forEach(otherProject => {
                    if (otherProject !== project) {
                        otherProject.classList.remove('fade');
                    }
                });
            });
        });
    }
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
}
</style>