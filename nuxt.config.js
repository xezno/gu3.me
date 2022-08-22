export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
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

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "@/plugins/date-filter.js",
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    ['@nuxtjs/fontawesome', {
      component: 'fa',
      icons: {
        solid: [ 'faEnvelope', 'faBlog' ],
        brands: [ 'faGithub', 'faDiscord', 'faSpotify', 'faKeybase', 'faYoutube' ]
      }
    }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  ssr: true,

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true // Can be also an object with default options
  },

  proxy: {
    '/blog': { 
      target: 'https://blog.gu3.me/',
      pathRewrite: {'^/blog/': ''} 
    }
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  }
}
