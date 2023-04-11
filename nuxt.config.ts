export default defineNuxtConfig({
    css: [
        "@/assets/core.scss",
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    vue: { 
        compilerOptions: {
            isCustomElement: (tag) => ['x-flex', 'x-flex-section'].includes(tag),
        }
    }
});
