import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import DiscographyPage from '@/views/DiscographyPage.vue'
import FilmographyPage from '@/views/FilmographyPage.vue'
import ActivityPage from '@/views/ActivityPage.vue'
import ArchivePage from '@/views/ArchivePage.vue'
import ProfilePage from '@/views/ProfilePage.vue'

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
