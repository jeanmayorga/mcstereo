let development = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: 'universal',
  target: 'server',
  srcDir: 'src/',
  head: {
    title: 'Mi Ciudad Stereo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap',
        rel: 'stylesheet',
      },
    ],
  },

  css: ['element-ui/lib/theme-chalk/index.css'],
  plugins: ['@/plugins/element-ui'],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],
  modules: ['@nuxt/http'],
  http: {
    baseURL: development
      ? 'https://dev-api.mcstereo.com'
      : 'https://api.mcstereo.com',
  },
  build: {
    transpile: [/^element-ui/],
  },
  render: {
    compressor: false,
  },
};
