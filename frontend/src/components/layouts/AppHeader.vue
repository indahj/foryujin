<script setup lang="ts">
// import StatusTicker from './StatusTicker.vue'
import Navbar from './Navbar.vue'
</script>


<template>
  <header class="header">
    <!-- <StatusTicker message="AN YUJIN GLOBAL — FAN-RUN, NON-OFFICIAL SITE" /> -->
    <div class="container header__row">
      <!-- <RouterLink to="/" class="header__wordmark">
        AN YUJIN <span class="header__wordmark-accent">GLOBAL</span>
      </RouterLink> -->
      <Navbar />
    </div>
  </header>
</template>

<style scoped>

.header__row {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 1.25rem;
}

.header__wordmark {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 600;
}

.header__wordmark-accent {
  color: var(--color-accent);
}
</style>
