<template>
    <div>
        <BaseGlassPanel class="project">
            <div class="project-inner">
                <div class="project-image">
                    <img :src="project.image" :alt="project.title" />
                </div>
                <div class="project-content">
                    <h2 class="project-title">{{ project.title }}</h2>
                    <p class="project-description">{{ project.description }}</p>

                    <span class="project-spacing"></span>

                    <div class="project-links">
                        <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer">
                            <font-awesome-icon :icon="['fab', 'github']" />
                        </a>
                        <a v-if="project.blogLink" :href="project.blogLink" target="_blank" rel="noopener noreferrer">
                            <font-awesome-icon icon="blog" />
                        </a>
                    </div>
                </div>
            </div>
        </BaseGlassPanel>
    </div>
</template>

<script>

export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/core.scss";

.project {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .project-inner {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        gap: 10px;

        .project-image {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 100%;
                height: 100%;
                aspect-ratio: 2;
                object-fit: cover;
                border-radius: 10px;
                background-color: var(--theme-800);
            }

            margin-bottom: 10px;
        }

        .project-content {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;

            .project-spacing {
                flex-grow: 1;
            }

            .project-links {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-shrink: 1;
                
                gap: 10px;

                a {
                    font-size: 20px;
                    color: $primary;
                    transition: all 0.2s ease-in-out;
                }
            }
        }
    }
}

@media screen and (max-width: $mobile) {
    .project {
        .project-inner {
            flex-direction: column;
            gap: 20px;

            .project-image {
                width: 100%;
                aspect-ratio: 2;
            }

            .project-content {
                width: 100%;
                height: 100%;
                gap: 10px;

                .project-links {
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
}
</style>