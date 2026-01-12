<script setup lang="ts">

import { computed, ref } from 'vue'
import { useDisplay } from 'vuetify'

const { smAndDown } = useDisplay()

const isMobile = computed(() => smAndDown.value)

const items = [
  'Profile',
  'Discography',
  'Filmography',
  'Achievements & Activities',
  'Archive',
]

const tab = ref('one')

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
      >
        <v-tab
          v-for="item in items"
          :key="item"
          class="nav-tab font-weight-bold text-h5 text-uppercase ga-2"
        >
          {{ item }}
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
      <h1 class="name">An Yujin</h1>

      <img src="../assets/165d6b709bf83208c0f45da144441051.png" alt="An Yujin" />

      <h2 class="title">
        THE ULTIMATE ALL-ROUNDER
        <br/>
        AN YUJIN
      </h2>

      <p class="subtitle">
        IVE'S LEADER, MAIN VOCALIST, MAIN DANCER | BRAND AMBASSADOR & MODEL
        <br />
        MC & VARIETY STAR | SOLO
        <br />
        AWARDS | 2024 BAEKSANG
      </p>
    </v-col>
  </v-row>

</v-container>
</template>

<style>

.hero-wrapper {
  position: relative;
}

.name {
  font-family: 'Cursive';
  position: absolute;
  top: 3rem;
  left: 48%;

}

.title {
  font-weight: 800;
  letter-spacing: 0.2em;
  margin-top: 2rem;
}

.subtitle {
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  margin-top: 1rem;
}

</style>
