export default defineNuxtConfig({
    css: [
        "@/assets/core.scss",
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => ['x-flex', 'x-flex-section'].includes(tag),
        }
    },
    app: {
        head: {
            title: 'Alex Guthrie',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Alex Guthrie: Computer Science student and software developer.' },
                { hid: 'og:site_name', property: 'og:site_name', content: 'Alex Guthrie' },
                { hid: 'og:locale', property: 'og:locale', content: 'en_GB' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:url', property: 'og:url', content: 'http://gu3.me/' },
                { hid: 'og:image', property: 'og:image', content: 'http://gu3.me/robot.png' },
                { hid: "twitter:card", name: "twitter:card", content: "summary" },
                { hid: "twitter:domain", property: "twitter:domain", content: "" },
                { hid: "twitter:url", property: "twitter:url", content: "http://gu3.me/" },
                { hid: "twitter:title", name: "twitter:title", content: "Alex Guthrie" },
                { hid: "twitter:description", name: "twitter:description", content: "Alex Guthrie: Computer Science student and software developer." },
                { hid: "twitter:image", name: "twitter:image", content: "http://gu3.me/robot.png" }
            ],
            link: [
                { rel: 'shortcut icon', type: 'image/png', href: '/robot.png' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap' },
                { rel: 'preload', as: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap' }
            ]
        },
    }
});
