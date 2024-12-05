// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],
  ssr: false,
  devtools: { enabled: false },
  watch: ['typography.ts'],
  future: {
    typescriptBundlerResolution: true,
  },
  compatibilityDate: '2024-11-01',
  nitro: {
    preset: 'static',
  },
  typescript: {
    typeCheck: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
  },
  image: {
    dir: 'public',
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536,
    },
  },
  tailwindcss: {
    configPath: './tailwind.config.js',
    viewer: true,
    quiet: true,
  },
})
