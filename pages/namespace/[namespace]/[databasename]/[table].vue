<script lang="ts" setup>
const route = useRoute()
const infoStore = useInfoStore()

infoStore.getTableInfo(route.params?.namespace, route.params?.databasename, route.params?.table)
</script>

<template>
  <div>
    Namespace: {{ route.params?.namespace }} / Database: {{ route.params?.databasename }} / Table: {{
      route.params?.table
    }}
    <VRow>
      <VCol
        v-for="(table, index) in infoStore.tableInfo"
        :key="index"
        class="v-col-12"
      >
        <div class="v-col-12">
          <h1>Events</h1>
          <VRow>
            <VCol
              v-for="(event, key) in table.events"
              :key="key"
              class="v-col-4"
            >
              <VCard>
                <VCardItem>
                  <VCardTitle>{{ key.toUpperCase() }}</VCardTitle>
                </VCardItem>
                <VCardText>
                  <VCode>{{ event }}</VCode>
                </VCardText>
              </VCard>
            </VCol>
          </VRow>
        </div>
        <div class="v-col-12">
          <h1>Fields</h1>
          <VRow>
            <VCol
              v-for="(field, key) in table.fields"
              :key="key"
              class="v-col-4"
            >
              <VCard>
                <VCardItem>
                  <VCardTitle>{{ key.toUpperCase() }}</VCardTitle>
                </VCardItem>
                <VCardText>
                  <VCode>{{ field }}</VCode>
                </VCardText>
              </VCard>
            </VCol>
          </VRow>
        </div>
        <div>
          <h1>Indexes</h1>
          <VRow>
            <VCol
              v-for="(indexe, key) in table.indexes"
              :key="key"
              class="v-col-4"
            >
              <VCard>
                <VCardItem>
                  <VCardTitle>{{ key.toUpperCase() }}</VCardTitle>
                </VCardItem>
                <VCardText>
                  <VCode>{{ indexe }}</VCode>
                </VCardText>
              </VCard>
            </VCol>
          </VRow>
        </div>
        <div>
          <h1>Lives</h1>
          <VRow>
            <VCol
              v-for="(live, key) in table.lives"
              :key="key"
              class="v-col-4"
            >
              <VCard>
                <VCardItem>
                  <VCardTitle>{{ key.toUpperCase() }}</VCardTitle>
                </VCardItem>
                <VCardText>
                  <VCode>{{ live }}</VCode>
                </VCardText>
              </VCard>
            </VCol>
          </VRow>
        </div>
        <div>
          <h1>Tables</h1>
          <VRow>
            <VCol
              v-for="(tableCode, key) in table.tables"
              :key="key"
              class="v-col-4"
            >
              <VCard>
                <VCardItem>
                  <VCardTitle>{{ key.toUpperCase() }}</VCardTitle>
                </VCardItem>
                <VCardText>
                  <VCode>{{ tableCode }}</VCode>
                </VCardText>
              </VCard>
            </VCol>
          </VRow>
        </div>
      </VCol>
    </VRow>
  </div>
</template>

<style scoped></style>
