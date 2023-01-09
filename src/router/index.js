import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue'),
    meta: {
      title: 'Services'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: 'About'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: {
      title: 'Contact'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: 'Oops Page Not Found'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to, from) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title + ' | 247 Property Fix';
  }
});

export default router
