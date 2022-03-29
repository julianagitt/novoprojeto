import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OrderView from '../views/OrderView.vue'
import SignUpView from '../views/SignUpView.vue'
import SignInView from '../views/SignInView.vue'
import ContactView from '../views/ContactView.vue'
import PathNotFound from '../views/ErroView.vue'
import GetOrder from '../views/GetOrder.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/order',
      name: 'order',
      component: OrderView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/getorder',
      name: 'getorder',
      component: GetOrder
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'pathnotfound',
      component: PathNotFound
    },
  ]
})

export default router
