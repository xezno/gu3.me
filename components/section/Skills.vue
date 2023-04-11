<template>
    <div class="skills">
        <ul class="skills-list">
            <li v-for="item in list">{{ item }}</li>
        </ul>

        <div class="skills-grid">
            <BaseGlassPanel v-for="item in grid">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
            </BaseGlassPanel>
        </div>
    </div>
</template>

<script>
import * as skills from '~~/data/skills.json';

export default {
    data() {
        return {
            list: skills.list,
            grid: skills.grid
        };
    },
    setup() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/core.scss";

.skills {
    .skills-grid {
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: stretch;
        justify-content: center;
        width: 100%;
        flex-wrap: wrap;

        .glass-panel {
            flex-grow: 1;
            flex-shrink: 1;
            flex-basis: 40%;
        }
    }

    .skills-list {
        list-style: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 0;
        margin-bottom: 50px;

        li {
            flex-basis: 12.5%;
            flex-grow: 1;
            margin: 5px;
            padding: 10px 20px;
            border-radius: 5px;
            text-align: center;

            @include glass-small;
        }
    }
}

//
// Mobile layouts
//
@media screen and (max-width: 768px) {
    .skills {
        flex-direction: column;
        gap: 10px;

        .glass-panel {
            flex-basis: 100% !important;
        }
    }
}
</style>