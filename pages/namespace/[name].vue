<script lang="ts" setup>
const route = useRoute()
const infoStore = useInfoStore()

infoStore.getNamespaceInfo(route.params.name)
</script>

<template>
  <div>
    <h1>Namespace: {{ route.params.name }}</h1>
    <VRow>
      <VCol
        v-for="(namespace, index) in infoStore.namespaceInfo"
        :key="index"
        class="col-12"
      >
        <h2>Databases</h2>
        <VRow class="pt-3">
          <VCol
            v-for="(database, key) in namespace.databases"
            :key="key"
            class="v-col-md-3"
          >
            <VCard>
              <VCardTitle>{{ key.toUpperCase() }}</VCardTitle>
              <VCardItem>
                <VCode>{{ database }}</VCode>
                <div class="pt-2">
                  <NuxtLink :to="`/namespace/${route.params.name}/${key}`">
                    <VBtn>View More</VBtn>
                  </NuxtLink>
                </div>
              </VCardItem>
            </VCard>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </div>
</template>

<style scoped></style>
