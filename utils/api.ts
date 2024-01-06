export const $api = $fetch.create({

  // Request interceptor
  async onRequest({ options }) {
    // Set baseUrl for all API calls
    const runtimeConfig = useRuntimeConfig()

    options.baseURL = process.env.NUXT_PUBLIC_API_BASE_URL || runtimeConfig.public.apiBaseUrl || '/api'

    const accessToken = useCookie('accessToken').value
    if (accessToken) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      }
    }
  },
})
