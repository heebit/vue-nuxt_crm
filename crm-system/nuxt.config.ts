export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
    '@nuxt/icon',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Lato: {
            wght: [300, 400, 700], // Исправлено имя шрифта
            ital: [300], // Для курсива
          },
        },
        display: 'swap', // Добавлено для улучшения производительности
      },
    ],
  ],

  icon: {
    serverBundle: {
      collections: ['uil', 'mdi'], // Коллекции иконок
    },
  },

  shadcn: {
    prefix: 'Ui', // Префикс для компонентов
    componentDir: './components/ui', // Директория компонентов
  },
});
