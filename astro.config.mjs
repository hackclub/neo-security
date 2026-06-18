import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://security.hackclub.com',
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  build: {
    inlineStylesheets: 'always',
  },
})
