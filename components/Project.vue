<template>
    <BaseGlassPanel class="project">
        <div class="project-inner">
            <div class="project-image">
                <img :src="project.image" :alt="project.title" :style="imageStyle" />
            </div>

            <div class="project-content">
                <h2 class="project-title">
                    {{ project.title }}

                    <!-- Medals -->
                    <span data-tip="1st Place Jam Winner" v-if="project.tags?.includes('1st-place')">
                        <span class="award award-1st">
                            <font-awesome-icon icon="trophy"></font-awesome-icon>
                            <div class="shine"></div>
                        </span>
                    </span>
                    <span data-tip="2nd Place Jam Award" v-if="project.tags?.includes('2nd-place')">
                        <span class="award award-2nd">
                            <font-awesome-icon icon="medal"></font-awesome-icon>
                            <div class="shine"></div>
                        </span>
                    </span>
                </h2>
                <h5 class="project-type">{{ project.type }} • {{ project.year }}</h5>
                <p class="project-description">{{ project.description }}</p>

                <span class="project-spacing"></span>

                <div class="project-links">
                    <a v-for="link in links" :href="link.link" target="_blank" rel="noopener noreferrer">
                        <span :data-tip="link.type.text">
                            <font-awesome-icon :icon="link.type.icon" />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </BaseGlassPanel>
</template>

<script>

export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    methods: {
        getLinkType(url) {
            if (url.includes('github')) {
                return {
                    icon: ['fab', 'github'],
                    text: 'Open on GitHub',
                }
            }

            if (url.includes('blog')) {
                return {
                    icon: ['fas', 'blog'],
                    text: 'Open Blog Post',
                }
            }

            if (url.includes('asset.party')) {
                return {
                    icon: ['fas', 'box'],
                    text: 'Open on asset.party',
                }
            }

            return {
                icon: ['fas', 'link'],
                text: 'Open Link',
            }
        }
    },
    computed: {
        imageStyle() {
            return {
                objectFit: this.project.iconStyle || 'cover',
            }
        },
        links() {
            let links = [];
            for (const link of this.project.links) {
                links.push({
                    link: link,
                    type: this.getLinkType(link),
                });
            }
            return links;
        }
    },
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
        gap: 20px;

        .project-title {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .award {
            font-size: 20px;
            color: var(--theme-primary);
            width: 34px;
            height: 34px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
            position: relative;
            overflow: hidden;
            background-color: var(--theme-glass);

            &.award-1st {
                color: darken(#b8860e, 20%);
                background-color: #b8860e;
            }

            &.award-2nd {
                color: darken(#a9a9a9, 20%);
                background-color: #a9a9a9;
            }

            svg {
                width: 20px;
                height: 20px;
            }

            .shine {
                position: absolute;
                top: 0;
                left: 0;
                width: 128px;
                height: 100%;
                background: linear-gradient(-75deg, transparent, transparent 20%, white 20.1%, white 50%, transparent 50.1%);
                opacity: 0.5;
                animation: shine 5s infinite;
            }
        }

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
                border-radius: 10px;
            }
        }

        .project-content {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
            gap: 5px;

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
                    color: var(--theme-primary);
                    transition: all 0.2s ease-in-out;
                }
            }
        }
    }
}

//
// Mobile layouts
//
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

//
// Animations
//
@keyframes shine {
    0% {
        background-position: 0 0;
    }

    75% {
        background-position: 0 0;
    }

    100% {
        background-position: 128px 0;
    }
}
</style>