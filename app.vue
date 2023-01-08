<template>
    <NuxtLayout>
        <section>

            <article class="intro-wrapper">

                <BaseGlassPanel class="intro">
                    <img class="me" src="/img/me.png" alt="Alex Guthrie" />
                    <h1>Alex Guthrie</h1>

                    <p>👋 Hey! I'm Alex.<br>I'm a Computer Science student and software engineer from the United
                        Kingdom,
                        interested in reverse engineering, computer graphics, and game development.</p>
                </BaseGlassPanel>

            </article>

            <article class="projects-wrapper">

                <BaseGlassPanel class="project glass-panel" v-for="project in projects" :key="project.name">
                    <h2>{{ project.title }}</h2>
                    <p>{{ project.description }}</p>
                    <b>Uses:</b>
                    <p>{{ project.madeIn }}</p>

                    <b>Links:</b>

                    <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    <a v-if="project.blogLink" :href="project.blogLink" target="_blank" rel="noopener noreferrer">View on
                        Blog</a>
                </BaseGlassPanel>

            </article>

        </section>
    </NuxtLayout>
</template>

<script>
import { projects } from './projects';

export default {
    data() {
        return {
            projects
        };
    },
    mounted() {
        //
        // Fade out other cards when hovering
        //
        const projects = document.querySelectorAll('.project');
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

        //
        // Apply ".at-bottom" to projects-wrapper when scrolled to bottom
        //
        const projectsWrapper = document.querySelector('.projects-wrapper');
        projectsWrapper.addEventListener('scroll', () => {
            if (projectsWrapper.scrollTop + projectsWrapper.clientHeight >= projectsWrapper.scrollHeight) {
                projectsWrapper.classList.add('at-bottom');
            } else {
                projectsWrapper.classList.remove('at-bottom');
            }
        });

    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/core.scss";

$intro-width: 350px;

section {
    width: 100%;
    height: calc( 100vh - 20px );
    max-width: 1280px;
    margin: auto;

    display: flex;
    gap: 20px;
    justify-content: stretch;
    align-items: center;
    flex-direction: row;
}

article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    flex-shrink: 1;

    &.intro-wrapper {
        flex-basis: $intro-width;
    }

    &.projects-wrapper {
        position: relative;
        flex-grow: 1;
        flex-basis: 100%;
        align-items: stretch;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        height: 50%;

        overflow-y: scroll;

        &:not(.at-bottom) {
            // mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%);
        }

        &.at-bottom {
            // mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%);
        }

        &::-webkit-scrollbar {
            width: 0;
        }
    }
}

.intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 25px;

    width: $intro-width;
    height: 50%;

    text-align: center;
    overflow: hidden;

    img.me {
        border-radius: 50%;
        margin-bottom: 20px;

        z-index: -1;
    }
}

.project {
    flex-grow: 1;
    flex-basis: 40%;
    flex-shrink: 1;

    flex-direction: column;

    display: flex;
    flex-wrap: wrap;

    transition: opacity 150ms ease;
    padding: 15px;

    &.fade {
        opacity: 0.5;
    }
}
</style>