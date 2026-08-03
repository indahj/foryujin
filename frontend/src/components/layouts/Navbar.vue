<script setup lang="ts">
const items = [
  { path: '/', label: 'Home' },
  { path: '/profile', label: 'Profile' },
  { path: '/discography', label: 'Discography' },
  { path: '/filmography', label: 'Filmography' },
  { path: '/activities', label: 'Achievements & Activities' },
  { path: '/archive', label: 'Archive' },
]
</script>

<template>
  <nav class="nav">
    <RouterLink
      v-for="item in items"
      :key="item.path"
      :to="item.path"
      class="nav__link"
      active-class="nav__link--active"
    >
      {{ item.label }}
    </RouterLink>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  gap: clamp(0.75rem, 2vw, 1.75rem);
  flex-wrap: wrap;
  padding: 1rem 0;
  font-family: var(--font-mono);
  font-size: 1.2rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.nav__link {
  color: var(--color-ink-soft);
  padding-bottom: 0.2rem;
  border-bottom: 2px solid transparent;
  text-decoration: none;
}

.nav__link:hover {
  color: var(--color-hover);
}

.nav__link--active {
  color: var(--color-ink);
  border-bottom-color: var(--color-accent);
}
</style>
