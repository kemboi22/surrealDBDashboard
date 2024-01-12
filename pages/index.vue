<script setup lang="ts">
const infoStore = useInfoStore()

infoStore.getInformation()
</script>

<template>
  <div>
    <h1>Account Information</h1>
    <VRow class="pt-3" v-for="(root, i) in infoStore.rootInfo" :key="i">
      <VCol class="v-col-12">
        <h2>Namespaces</h2>
        <VRow class="pt-3">
          <VCol v-for="(namespaceDesc, name) in root.namespaces" :key="name">
            <VCard>
              <VCardTitle class="h-3 bold ">
                <span class="flex  align-center">
                {{ name.toUpperCase() }}
              </span>
              </VCardTitle>
              <VCode>{{ namespaceDesc }}</VCode>
            </VCard>
          </VCol>
        </VRow>
      </VCol>

      <VCol class="v-col-12">
        <h1>USERS</h1>
        <VCol class="v-col-3" v-for="(usernameDesc, username) in root.users" :key="username">
          <VCard>
            <VCardTitle>{{ username.toString().toUpperCase() }}</VCardTitle>
            <VCode>{{ usernameDesc }}</VCode>
          </VCard>
        </VCol>
      </VCol>
    </VRow>
  </div>
</template>
