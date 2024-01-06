import type { User } from '@/types'

export const useAuthStore = defineStore('auth', () => {
  const loginCredentials = ref<User>(<User>{})
  const token = ref<string | undefined>('')

  const login = async () => {
    const { data } = await useFetch('/api/auth/login', {
      method: 'POST',
      body: loginCredentials.value,
    })

    token.value = data.value?.token
  }

  return {
    loginCredentials,
    token,
    login,
  }
})
