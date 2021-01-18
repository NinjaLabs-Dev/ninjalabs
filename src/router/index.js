import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';
import Contact from '../views/Contact.vue';
import ErrorPage from '../views/ErrorPage.vue';
import ImageHosting from '../views/ImageHosting';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/hosting',
    name: 'Hosting',
    component: ImageHosting
  },
  {
    path: '*',
    name: 'Error',
    component: ErrorPage
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
