// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // 必须关闭，桌面端只能用纯前端
  ssr: false,

  devServer: {
    port: 3004,
  },

  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],

  typescript: {
    strict: true,
    typeCheck: false
  },

  experimental: {
    appManifest: false
  },

  app: {
    baseURL: './',
    head: {
      title: '个人报销管理系统',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },

  // 🔥 核心修复：强制生成前端 index.html
  nitro: {
    preset: 'static',
    output: {
      publicDir: '.output/public'
    }
  },

  // 🔥 关键：关闭服务端渲染，只打包前端页面
  build: {
    ssr: false
  }
})
