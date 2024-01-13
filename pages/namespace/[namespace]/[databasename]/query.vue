<script lang="ts" setup>
import type { ResponseData } from '@/types'

const code = ref<string>('')
const loading = ref<boolean>(false)
const results = ref<[]>([])
const errors = ref()

const executeCode = async () => {
  loading.value = true

  const { data, error, status } = await useFetch<ResponseData<[]>>('/api/query', {
    method: 'POST',
    body: {
      query: code,
      namespace: useRoute().params.namespace,
      database: useRoute().params.database,
    },
    watch: false,
  })

  loading.value = false
  if (data.value)
    results.value = data.value.data

  if (error.value) {
    errors.value = error.value.message
    console.log(error.value)
  }
}

const infoStore = useInfoStore()

infoStore.getInformation()
</script>

<template>
  <div>
    <VCard title="Run Query">
      <VCardText>
        <VForm @submit.prevent="executeCode">
          <div>
            <VLabel>Write Your Query Here</VLabel>
            <VTextarea
              v-model="code"
              auto-grow
              clearable
            />
          </div>
          <div class="pt-2">
            <VBtn
              type="submit"
              :loading="loading"
            >
              Execute Code
            </VBtn>
          </div>
        </VForm>
      </VCardText>
    </VCard>
    <div
      v-if="results"
      class="pt-4"
    >
      <VRow>
        <VCol class="v-col-12">
          <VCard
            v-for="(result, index) in results"
            :key="index"
          >
            <VCardItem>
              <VCardTitle>Results</VCardTitle>
            </VCardItem>
            <VCardText>
              <pre>
                <code>
                {{ result }}
              </code>
              </pre>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </div>
    <div v-else-if="errors">
      <VCard>
        <VCardItem>
          <VCardTitle>An error Occurred</VCardTitle>
        </VCardItem>
        <VCardText>
          <code>
            <pre>
              {{ errors }}
            </pre>
          </code>
        </VCardText>
      </VCard>
    </div>
  </div>
</template>

<style scoped></style>
