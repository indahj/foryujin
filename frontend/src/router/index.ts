import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/HomePage.vue'
import DiscographyPage from '@/DiscographyPage.vue'
import FilmographyPage from '@/FilmographyPage.vue'
import ActivityPage from '@/ActivityPage.vue'
import ArchivePage from '@/ArchivePage.vue'
import ProfilePage from '@/ProfilePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage,
  },
  {
    path: '/discography',
    name: 'Discography',
    component: DiscographyPage,
  },
  {
    path: '/filmography',
    name: 'Filmography',
    component: FilmographyPage,
  },
  {
    path: '/activities',
    name: 'Achievements & Activities',
    component: ActivityPage,
  },
  {
    path: '/archive',
    name: 'Archive',
    component: ArchivePage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
