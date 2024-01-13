<script lang="ts" setup>
const route = useRoute()
const infoStore = useInfoStore()

infoStore.getDatabaseInfo(route.params.namespace, route.params.database)
</script>

<template>
  <div>
    <h1>Namespace: {{ route.params.namespace }} / Database: {{ route.params.database }}</h1>

    <VRow>
      <VCol
        v-for="(database, index) in infoStore.databaseInfo"
        :key="index"
        class="v-col-12"
      >
        <div class="v-col-12">
          <h1>Analyzers</h1>
          <VRow>
            <VCol
              v-for="(analyzer, key) in database.analyzers"
              :key="key"
              class="v-col-3"
            >
              <VCard>
                <VCardTitle>{{ key.toUpperCase() }}</VCardTitle>
                <VCardItem>
                  <VCode>{{ analyzer }}</VCode>
                </VCardItem>
              </VCard>
            </VCol>
          </VRow>
        </div>
        <div class="v-col-12">
          <h1>Functions</h1>
          <VRow>
            <VCol
              v-for="(functionCode, key) in database.functions"
              :key="key"
              class="v-col-3"
            >
              <VCard>
                <VCardTitle>{{ key.toUpperCase() }}</VCardTitle>
                <VCardItem>
                  <VCode>{{ functionCode }}</VCode>
                </VCardItem>
              </VCard>
            </VCol>
          </VRow>
        </div>
        <div class="v-col-12">
          <h1>Params</h1>
          <VRow>
            <VCol
              v-for="(param, key) in database.params"
              :key="key"
              class="v-col-3"
            >
              <VCard>
                <VCardTitle>{{ key.toUpperCase() }}</VCardTitle>
                <VCardItem>
                  <VCode>{{ param }}</VCode>
                </VCardItem>
              </VCard>
            </VCol>
          </VRow>
        </div>
        <div class="v-col-12">
          <h1>Scopes</h1>
          <VRow>
            <VCol
              v-for="(scope, key) in database.scopes"
              :key="key"
              class="v-col-3"
            >
              <VCard>
                <VCardTitle>{{ key.toUpperCase() }}</VCardTitle>
                <VCardItem>
                  <VCode>{{ scope }}</VCode>
                </VCardItem>
              </VCard>
            </VCol>
          </VRow>
        </div>
        <div class="v-col-12">
          <h1>Tables</h1>
          <VRow>
            <VCol
              v-for="(table, key) in database.tables"
              :key="key"
              class="v-col-4"
              align-self="auto"
            >
              <VCard>
                <VCardTitle>{{ key.toUpperCase() }}</VCardTitle>
                <VCardItem>
                  <VCode>{{ table }}</VCode>
                </VCardItem>
                <VCardActions>
                  <NuxtLink :to="`/namespace/${route.params.namespace}/${route.params.database}/${key}`">
                    <VBtn>View Table Info</VBtn>
                  </NuxtLink>
                </VCardActions>
              </VCard>
            </VCol>
          </VRow>
        </div>
        <div class="v-col-12">
          <h1>Tokens</h1>

          <VRow>
            <VCol
              v-for="(token, key) in database.tokens"
              :key="key"
              class="v-col-3"
            >
              <VCard>
                <VCardTitle>{{ key.toUpperCase() }}</VCardTitle>
                <VCardItem>
                  <VCode>{{ token }}</VCode>
                </VCardItem>
              </VCard>
            </VCol>
          </VRow>
        </div>
        <div class="v-col-12">
          <h1>Users</h1>
          <VRow>
            <VCol
              v-for="(user, key) in database.users"
              :key="key"
              class="v-col-3"
            >
              <VCard>
                <VCardTitle>{{ key.toUpperCase() }}</VCardTitle>
                <VCardItem>
                  <VCode>{{ user }}</VCode>
                </VCardItem>
              </VCard>
            </VCol>
          </VRow>
        </div>
      </VCol>
    </vRow>
  </div>
</template>

<style scoped></style>
