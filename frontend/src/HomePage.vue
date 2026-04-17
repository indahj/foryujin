<script setup lang="ts">

import { computed, ref, onMounted } from 'vue'
import { useDisplay } from 'vuetify'

const { mdAndDown } = useDisplay()

const isMobile = computed(() => mdAndDown.value)

onMounted(() => {
  console.log(isMobile.value) // false
})

const items = [
  { title: 'Profile', to: '/profile' },
  { title: 'Discography', to: '/discography' },
  { title: 'Filmography', to: '/filmography' },
  { title: 'Achievements & Activities', to: '/activities' },
  { title: 'Archive', to: '/archive' },
]


const tab = null

</script>

<template>
<v-container fluid>

  <v-row justify="center">
    <v-col cols="12">
      <v-card v-if="isMobile">
        testing
      </v-card>

      <v-tabs
        v-else
        v-model="tab"
        align-tabs="center"
        color="light-blue-darken-3"
        slider-transition="grow"
      >
        <v-tab
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          class="nav-tab font-weight-bold text-h5 text-uppercase ga-2"
        >
          {{ item.title }}
        </v-tab>
      </v-tabs>
    </v-col>
  </v-row>


  <v-row justify="center">
    <v-col
      cols="12"
      md="6"
      class="text-center hero-wrapper"
    >
    </v-col>
  </v-row>

</v-container>

<v-breadcrumbs></v-breadcrumbs>
</template>

<style>

.v-tab:hover {
  text-decoration: underline;
}

.hero-wrapper {
  position: relative;
}

</style>
