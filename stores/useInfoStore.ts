import type { DatabaseInfo, NamespaceInfo, ResponseData, RootInfo, TablesInfo } from '@/types'

export const useInfoStore = defineStore('info', () => {
  const rootInfo = ref<RootInfo[]>([])
  const namespaceInfo = ref<NamespaceInfo[]>([])
  const databaseInfo = ref<DatabaseInfo[]>([])
  const tableInfo = ref<TablesInfo[]>([])

  const getInformation = async () => {
    const { data } = await useFetch<ResponseData<RootInfo[]>>('/api/info')

    if (data.value)
      rootInfo.value = data.value.data
  }

  const getNamespaceInfo = async (name: string) => {
    const { data, error } = await useFetch<ResponseData<NamespaceInfo[]>>(`/api/info/namespace/${name}`)
    // eslint-disable-next-line sonarjs/no-collapsible-if
    if (!error.value) {
      if (data.value)
        namespaceInfo.value = data.value.data
    }
  }

  const getDatabaseInfo = async (namespace: string, database: string) => {
    const { data } = await useFetch<ResponseData<DatabaseInfo[]>>(`/api/info/${namespace}/${database}`)
    if (data.value)
      databaseInfo.value = data.value.data
  }

  const getTableInfo = async (namespace: string, database: string, table: string) => {
    const { data } = await useFetch<ResponseData<TablesInfo[]>>(`/api/info/${namespace}/${database}/${table}`)
    if (data.value) {
      console.log(data.value)
      tableInfo.value = data.value.data
    }
  }

  return {
    rootInfo,
    getInformation,
    namespaceInfo,
    getNamespaceInfo,
    databaseInfo,
    getDatabaseInfo,
    tableInfo,
    getTableInfo,
  }
})
