import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import VTooltipPlugin from 'v-tooltip'
import LottieVuePlayer from '@lottiefiles/vue-lottie-player';
import ElementUI from 'element-ui';
import locale from "element-ui/src/mixins/locale";
import 'boxicons/css/boxicons.min.css';
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueRouter)
Vue.use(VueMeta)
Vue.use(LottieVuePlayer)
Vue.use(VTooltipPlugin)
Vue.use(ElementUI, {locale: locale})

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home')
	},
	{
		path: '/about',
		name: 'Me',
		component: () => import('../views/Me')
	},
	{
		path: '/projects',
		name: 'Experience',
		component: () => import('../views/Projects')
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () => import('../views/Contact')
	},
	{
		path: '/hosting',
		name: 'Hosting',
		component: () => import('../views/Hosting')
	},
	{
		path: '*',
		name: 'Error',
		component: () => import('../views/NotFound.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
