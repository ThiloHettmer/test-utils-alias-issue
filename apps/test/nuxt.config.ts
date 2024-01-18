import alias from '../../alias'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['../../layers/base'],

  devtools: { enabled: true },

  alias,
})
