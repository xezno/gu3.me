<template>
    <div class="experience">
        <Timeline :timeline="career"></Timeline>
    </div>
</template>

<script>

import { career } from '~~/data/career.js';

export default {
    data() {
        return {
            career
        };
    }
};
</script>

<style lang="scss" scoped></style>