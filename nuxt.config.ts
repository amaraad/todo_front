// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [],
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-swiper',
        '@pinia/nuxt'
    ],
    runtimeConfig: {
        public: {
            directusUrl: process.env.DIRECTUS_URL,
            appTitle: process.env.APP_TITLE
        },
    }

})
