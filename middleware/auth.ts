export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()
  if (authStore.authenticated && authStore.token != null)
    return navigateTo('/')
  else
    return navigateTo('/auth/login')
})
