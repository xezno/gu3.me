<template>
    <nav>
        <div class="nav-inner">
            <ul>
                <li v-for="item in items" :key="item.id">
                    <NuxtLink :to="item.to">
                        {{ item.title }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data: function () {
        return {
            items: [{
                id: 1,
                title: "Home",
                to: "/"
            },
            {
                id: 2,
                title: "Projects",
                to: "/projects"
            },
            {
                id: 3,
                title: "Blog",
                to: "https://blog.gu3.me/"
            },
            {
                id: 4,
                title: "Contact",
                to: "mailto:alex@gu3.me"
            }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/core.scss";

nav {
    position: static;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;

    padding: 20px 0;
    background-color: var(--theme-1000);

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    list-style: none;

    position: relative;

    .nav-inner {
        width: 100%;
        max-width: 1280px;
        margin: auto;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        list-style: none;
    }

    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        padding: 0;
        margin: 0;
        gap: 40px;

        li {
            a {
                color: white;
                text-decoration: none;
                transition: all 0.2s ease-in-out;
                text-transform: uppercase;
                font-weight: 700;

                &:hover {
                    color: $text-blog;
                }
            }
        }
    }
}
</style>
