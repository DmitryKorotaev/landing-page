export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-lending",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto: 100,200,300,400,500,700&display=swap",
      },
    ],
  },

  css: ["@/assets/global.css"],

  plugins: [],

  components: true,

  buildModules: [],

  modules: ["bootstrap-vue/nuxt", "@nuxtjs/axios", "@nuxtjs/fontawesome"],
  fontawesome: {
    icons: {
      brands: true, // включает Brand иконки
    },
  },

  axios: {
    baseURL: "/",
  },

  build: {},
};
