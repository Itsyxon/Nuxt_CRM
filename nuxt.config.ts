export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '~/assets/styles/global.scss',
    'primeicons/primeicons.css', // Добавьте этот стиль
  ],
  ssr: true,
  typescript: {
    typeCheck: true,
    strict: false,
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue'],
  imports: {
    autoImport: true,
  },
})
