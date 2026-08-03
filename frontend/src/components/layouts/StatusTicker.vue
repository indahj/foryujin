<script setup lang="ts">

defineProps<{ message: string }>()

</script>

<template>
  <div class="ticker" role="status">
    <div class="ticker__track">
      <span v-for="n in 2" :key="n" class="ticker__set">
        <span class="ticker__item">{{ message }}</span>
        <span class="ticker__dot">&#9679;</span>
      </span>
    </div>
  </div>
</template>

<style scoped>
.ticker {
  background: var(--color-ink);
  color: var(--color-bg);
  overflow: hidden;
  white-space: nowrap;
}

.ticker__track {
  display: inline-flex;
  animation: scroll 22s linear infinite;
}

.ticker__set {
  display: inline-flex;
  align-items: center;
}

.ticker__item {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
}

.ticker__dot {
  color: var(--color-accent);
  font-size: 0.5rem;
}

@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .ticker__track {
    animation: none;
  }
}
</style>
