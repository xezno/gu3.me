<template>
    <div class="experience">
        <Timeline :timeline="experience"></Timeline>
    </div>
</template>

<script>

import * as experience from '~~/data/experience.json';

export default {
    data() {
        return {
            experience: experience.items
        };
    }
};
</script>

<style lang="scss" scoped>
.experience {
    width: 100%;
}
</style>