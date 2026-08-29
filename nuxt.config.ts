// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [
    '~/assets/scss/main.scss',
    '~/assets/scss/fonts.scss',
    '~/assets/scss/context.scss'


  ],

  modules: ['nuxt-svgo', 'nuxt-swiper', '@pinia/nuxt', '@nuxtjs/i18n'],

  pinia: {
    // Ikkala papkadan ham store-larni avtomatik import qiladi:
    storesDirs: ['./stores/**', './app/stores/**'],
  },

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || 'http://localhost:3000/api',
    }
  },
   i18n: {
    langDir: 'locales',
    
    defaultLocale: 'uz-latn',
    
    locales: [
      {
        code: 'uz-latn',
        iso: 'uz-Latn-UZ',
        name: 'O‘zbekcha',
        file: 'uz-latn.json'
      },
      {
        code: 'uz-cyrl',
        iso: 'uz-Cyrl-UZ',
        name: 'Ўзбекча',
        file: 'uz-cyrl.json'
      }
    ],

   

    strategy: 'prefix_except_default',

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },



  app: {
    head: {
      link: [
       { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  }
})