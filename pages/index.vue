<template>
    <x-flex>

        <x-flex-section>
            <article class="intro-wrapper">

                <SectionIntro></SectionIntro>

            </article>
        </x-flex-section>

        <x-flex-section>
            <section class="content">

                <h1>Projects</h1>

                <article class="projects-wrapper">

                    <Project class="project" v-for="(project) in projects" :key="project.name" :project="project"></Project>

                    <a href="#" class="view-more" v-on:click="toggleViewMore">
                        <BaseGlassPanel :shine="false">
                            <p v-if="!viewMore">View more...</p>
                            <p v-if="viewMore">View less</p>
                        </BaseGlassPanel>
                    </a>

                </article>

                <h1>Experience</h1>

                <article class="career-wrapper">

                    <Timeline :timeline="career"></Timeline>

                </article>

                <h1>Skills</h1>

                <article class="skills-wrapper">

                    <ul>
                        <li>Unity</li>
                        <li>Unreal</li>
                        <li>C#</li>
                        <li>C++</li>

                        <li>TypeScript</li>
                        <li>JavaScript</li>
                        <li>SCSS</li>
                        <li>Vue</li>
                        <li>Docker</li>
                        <li>PostgreSQL</li>
                        
                        <li>Python</li>
                        <li>Rust</li>
                    </ul>

                    <div class="skills">
                        <BaseGlassPanel>
                            <h4>2D and 3D game development</h4>
                            <p>Experienced in writing C# code for use in game engines (such as s&box and Unity) and as
                                desktop
                                applications</p>
                        </BaseGlassPanel>
                        <BaseGlassPanel>
                            <h4>Desktop application development using C++ and C#</h4>
                            <p>Experienced in writing efficient native code for desktop applications</p>
                        </BaseGlassPanel>
                        <BaseGlassPanel>
                            <h4>Server-side development using Node.js</h4>
                            <p>Skilled in creating backends for web applications</p>
                        </BaseGlassPanel>
                        <BaseGlassPanel>
                            <h4>Responsive web design using HTML, CSS, and JavaScript</h4>
                            <p>Skilled in creating uniquely styled web apps for mobile and desktop platforms</p>
                        </BaseGlassPanel>
                    </div>

                </article>
            </section>

            <Footer></Footer>
        </x-flex-section>
    </x-flex>
</template>

<script>
import { projects } from '~~/data/projects.js';
import { career } from '~~/data/career.js';

export default {
    data() {
        return {
            projects,
            career,
            viewMore: false,
            scrollIndex: 0,
            lastScroll: 0
        };
    },
    computed: {
        // Limit projects if viewMore is false
        projects() {
            if (this.viewMore) {
                return this.projects;
            } else {
                return this.projects.slice(0, 4);
            }
        }
    },
    methods: {
        toggleViewMore() {
            this.viewMore = !this.viewMore;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/core.scss";

article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    flex-shrink: 1;

    &.projects-wrapper {
        position: relative;
        flex-grow: 1;
        align-items: stretch;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;

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

    &.projects-wrapper, &.career-wrapper, &.skills-wrapper {
        margin-bottom: 100px;
    }
}

x-flex {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: 100vh;

    x-flex-section {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: scroll;

        &:first-of-type {
            flex-basis: 30%;
            max-width: 500px;
        }

        &:last-of-type {
            padding: 0 50px;
            padding-top: 50px;
            margin: 0 auto;
            max-height: 100%;
            overflow-y: scroll;
        }
    }

    section.content {
        max-width: 960px;
        margin: 0 auto;
    }
}

ul {
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

.skills {
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

h1 {
    text-align: center;
    margin: 20px 0;
}

@media (max-width: $mobile) {
    x-flex {
        flex-direction: column;
        height: unset;

        x-flex-section {
            flex-basis: 100% !important;
            width: 100%;
            overflow-y: scroll;
            height: unset;
            max-height: unset !important;
            max-width: unset !important;

            &:last-of-type {
                padding-left: 20px;
                padding-right: 20px;
            }
        }
    }

    .intro-wrapper {
        width: 100%;
    }

    .projects-wrapper {
        .project {
            flex-basis: 100% !important;
        }
    }

    .skills {
        flex-direction: column;
        gap: 10px;

        .glass-panel {
            flex-basis: 100% !important;
        }
    }
}
</style>