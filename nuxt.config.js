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
  transition: {
    name: 'fade',
    mode: 'out-in',
  },
};
