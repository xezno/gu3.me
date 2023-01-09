<template>

    <article class="intro-wrapper">

        <SectionIntro></SectionIntro>

    </article>


        <h1>Projects</h1>

        <article class="projects-wrapper">

            <Project class="project" v-for="(project) in projects" :key="project.name" :project="project"></Project>

            <nuxt-link to="/projects" class="view-more">
                <BaseGlassPanel>
                    <p>View more...</p>
                </BaseGlassPanel>
            </nuxt-link>

        </article>

        <h1>Skills</h1>

        <article class="skills-wrapper">

            <ul>
                <li>Unity</li>
                <li>Unreal</li>
                <li>C#</li>
                <li>C++</li>
                <li>SCSS</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>Docker</li>
                <li>Visual Studio</li>
                <li>Visual Studio Code</li>
                <li>PostgreSQL</li>
                <li>Vue</li>
            </ul>

            <div class="skills">
                <BaseGlassPanel>
                    <h4>2D and 3D game development</h4>
                    <p>Experienced in writing C# code for use in game engines (such as s&box and Unity) and as desktop
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


</template>

<script>
import { projects } from '@/projects';

export default {
    data() {
        return {
            projects
        };
    },
    computed: {
        // Limit projects
        projects() {
            return this.projects.slice(0, 4);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/core.scss";

article {
    margin-bottom: 100px;
}

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
        margin-right: -15px;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        overflow-y: scroll;

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
}

ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
        margin: 5px;
        padding: 10px 20px;
        background-color: $grey-800;
        border-radius: 5px;
        border: 1px solid rgba($grey-600, 0.2);
        text-align: center;

        @include glass-small($grey-600, $grey-700);
    }
}

.skills {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: stretch;
    justify-content: center;
    margin: 20px 0;
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
</style>