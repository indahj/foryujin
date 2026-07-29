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
    meta: {
      breadcrumb: 'Home'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage,
    meta: {
      breadcrumb: 'Profile'
    }
  },
  {
    path: '/discography',
    name: 'Discography',
    component: DiscographyPage,
    meta: {
      breadcrumb: 'Discography'
    }
  },
  {
    path: '/filmography',
    name: 'Filmography',
    component: FilmographyPage,
    meta: {
      breadcrumb: 'Filmography'
    }
  },
  {
    path: '/activities',
    name: 'Achievements & Activities',
    component: ActivityPage,
    meta: {
      breadcrumb: 'Achievements & Activities'
    }
  },
  {
    path: '/archive',
    name: 'Archive',
    component: ArchivePage,
    meta: {
      breadcrumb: 'Archive'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
