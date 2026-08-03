<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from './components/layouts/AppHeader.vue';


</script>

<template>
  <app-header/>
  <main>
    <router-view/>
  </main>
  <footer/>

</template>

<style scoped></style>
