module.exports = {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans',
      },
    ],
  },
  css: [
    '~/assets/styles/main.css',
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: 'https://nuxt-blog-e5b96.firebaseio.com',
  },
  plugins: [
    '~/plugins/date-filter.js',
    '~/plugins/core-components.js',
  ],
  transition: {
    name: 'fade',
    mode: 'out-in',
  },
};
