<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()

const breadcrumbs = computed(() => {
  return route.matched
    .filter(r => r.meta?.breadcrumb)
    .map(r => ({
      title:
        typeof r.meta.breadcrumb === 'function'
          ? r.meta.breadcrumb(route)
          : r.meta.breadcrumb,
      to: r.path.includes(':') ? route.fullPath : r.path,
      disabled: r.path === route.path
    }))
})

</script>

<template>
   <v-breadcrumbs :items="breadcrumbs" />
  <router-view />
</template>

<style scoped></style>
