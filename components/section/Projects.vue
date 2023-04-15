<template>
    <div class="projects">
        <Project class="project" v-for="(project) in projects" :key="project.name" :project="project"></Project>

        <a href="#" class="view-more" v-on:click="toggleViewMore">
            <BaseGlassPanel :shine="false">
                <p v-if="!viewMore">
                    View more
                    <font-awesome-icon icon="chevron-down" />
                </p>
                <p v-if="viewMore">
                    View less
                    <font-awesome-icon icon="chevron-up" />
                </p>
            </BaseGlassPanel>
        </a>
    </div>
</template>

<script>
import * as projects from '~~/data/projects.json';

export default {
    data() {
        return {
            projectList: projects.items,
            viewMore: false
        };
    },
    computed: {
        // Limit projects if viewMore is false
        projects() {
            if (this.viewMore) {
                return this.projectList;
            } else {
                return this.projectList.slice( 0, 4 );
            }
        }
    },
    methods: {
        toggleViewMore() {
            this.viewMore = !this.viewMore;
        }
    }
}
</script>

<style lang="scss" scoped>
.projects {
    position: relative;
    flex-grow: 1;
    align-items: stretch;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    display: flex;

    .project {
        // Fill the remaining space, but only if there isn't lots of space
        flex-grow: 1;
        flex-basis: 40%;
        flex-shrink: 1;
        flex-direction: column;

        justify-self: center;
        align-self: stretch;
        height: auto;

        display: flex;
        flex-wrap: wrap;
    }

    .view-more {
        flex-basis: 100%;
        flex-grow: 1;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
}

//
// Mobile layouts
//
@media screen and (max-width: 768px) {
    .projects {
        .project {
            flex-basis: 100% !important;
        }
    }
}
</style>