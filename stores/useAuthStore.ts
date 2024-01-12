import type { User } from '@/types'

export const useAuthStore = defineStore('auth', () => {
  const loginCredentials = ref<User>(<User>{})
  const token = ref<string | undefined>('')
  const authenticated = ref<boolean>(false)

  const login = async () => {
    const { data, error } = await useFetch('/api/auth/login', {
      method: 'POST',
      body: loginCredentials.value,
    })

    if (!error.value) {
      authenticated.value = true
      token.value = data.value?.token

      return navigateTo('/')
    }
  }

  return {
    loginCredentials,
    token,
    login,
    authenticated,
  }
})
