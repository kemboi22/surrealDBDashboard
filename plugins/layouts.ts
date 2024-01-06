import { createLayouts } from '@layouts'

import { layoutConfig } from '@themeConfig'

// Styles
import '@layouts/styles/index.scss'

export default defineNuxtPlugin(nuxtApp => {
  // ℹ️ We generate layout config from our themeConfig so you don't have to write config twice
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  nuxtApp.vueApp.use(createLayouts(layoutConfig))
})
