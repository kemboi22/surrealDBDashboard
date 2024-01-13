<script setup lang="ts">
const infoStore = useInfoStore()

infoStore.getInformation()
</script>

<template>
  <div>
    <h1>Account Information</h1>
    <VRow
      v-for="(root, i) in infoStore.rootInfo"
      :key="i"
      class="pt-3"
    >
      <VCol class="v-col-12">
        <h2>Namespaces</h2>
        <VRow class="pt-3">
          <VCol
            v-for="(namespaceDesc, name) in root.namespaces"
            :key="name"
          >
            <VCard>
              <VCardItem>
                <VCardTitle class="h-3 bold ">
                  <span class="flex  align-center">
                    {{ name.toUpperCase() }}
                  </span>
                </VCardTitle>
              </VCardItem>
              <VCardText>
                <VCode>{{ namespaceDesc }}</VCode>
              </VCardText>
              <VCardActions>
                <div class="pt-3 pb-2 pl-3">
                  <NuxtLink
                    :to="`/namespace/${name}`"
                    class="v-btn"
                  >
                    <VBtn variant="flat">
                      View Namespace
                    </VBtn>
                  </NuxtLink>
                </div>
              </VCardActions>
            </VCard>
          </VCol>
        </VRow>
      </VCol>

      <VCol class="v-col-12">
        <h1>USERS</h1>
        <VCol
          v-for="(usernameDesc, username) in root.users"
          :key="username"
          class="v-col-3"
        >
          <VCard>
            <VCardTitle>{{ username.toString().toUpperCase() }}</VCardTitle>
            <VCode>{{ usernameDesc }}</VCode>
          </VCard>
        </VCol>
      </VCol>
    </VRow>
  </div>
</template>
