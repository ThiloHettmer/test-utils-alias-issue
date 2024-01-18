import alias from '../../alias'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    includeWorkspace: true,
  },

  modules: [
    // https://github.com/nuxt/nuxt-vitest
    '@nuxt/test-utils/module',
  ],

  testUtils: {
    test: {
      globals: true,
      environment: 'nuxt',
    },
    resolve: {
      alias,
    },
  },

  devtools: { enabled: true },

  alias,
})
