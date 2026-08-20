// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', 'nuxt-swiper'],

  css : [
    "~/assets/sass/main.sass",
    "~/assets/sass/_variables.sass",
    "~/assets/sass/fonts.sass"
  ],    

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/sass/_variables.scss" as *;'
        }
      }
    }
  },
  app :{
    pageTransition: false,
    head :{
      link :[
        {
          rel :"icon",
          type :"image/png",
          href :"/site_icon.png"
        }
      ]
    }
  }
})