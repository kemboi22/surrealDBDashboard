import type { ResponseData, RootInfo } from '@/types'

export const useInfoStore = defineStore('info', () => {
  const rootInfo = ref<RootInfo[]>([])

  const getInformation = async () => {
    const { data } = await useFetch<ResponseData<RootInfo[]>>('/api/info')

    if (data.value)
      rootInfo.value = data.value.data
  }

  return { rootInfo, getInformation }
})
