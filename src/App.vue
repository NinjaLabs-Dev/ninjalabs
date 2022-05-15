<template>
	<div id="app">
		<div class="noise-wrapper">
			<div class="noise"></div>
		</div>

		<div class="content-container">
			<div class="border"></div>
			<div class="alert-color"></div>
			<div class="inner-content">
				<div class="noise-wrapper">
					<div class="noise"></div>
				</div>
				<div class="navbar">
					<div class="brand">
						<router-link to="/">
							<h3>NinjaLabs</h3>
						</router-link>
					</div>

					<div class="menu-item">
						<router-link to="/" class="item">
							<i class='bx bx-home' ></i>
							Home
						</router-link>

						<router-link to="about" class="item">
							<i class='bx bx-user' ></i>
							Me
						</router-link>

						<router-link to="/projects" class="item">
							<i class='bx bx-laptop' ></i>
							Experience
						</router-link>

						<router-link to="/contact" class="item">
							<i class='bx bx-phone' ></i>
							Contact
						</router-link>

						<router-link to="/hosting" class="item cta">
							<i class='bx bx-briefcase' ></i>
							Website Hosting
						</router-link>
					</div>
				</div>
				<transition name="fade" mode="out-in">
					<router-view/>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
export default  {
	metaInfo: {
		title: 'Home',
		titleTemplate: '%s | NinjaLabs',
		htmlAttrs: {
			lang: 'en',
			amp: true
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'description', content: 'Creating simple, modern and intricate web designs and applications to power the world of real-time data.' },
			{ name: 'og:image', content: 'https://i.imgur.com/oobGtbO.png' },
			{ name: 'og:description', content: 'Creating simple, modern and intricate web designs and applications to power the world of real-time data.' },
			{ name: 'og:title', content: 'NinjaLabs - Creating the Future' },
			{ name: 'theme-color', content: '#FFFFFF' }
		],
		link: [
			{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: true },
		],
		script: [
			{ async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-L35FKSSWSF' },
			{ async: true, src: 'https://www.googletagmanager.com/gtag/js?id=UA-219527447-1'}
		]
	},
	data() {
		return {
			nav: false
		}
	},
	mounted() {
		window.dataLayer = window.dataLayer || [];
		this.gtag('js', new Date());
		this.gtag('config', 'G-L35FKSSWSF');
		this.gtag('config', 'UA-219527447-1');

		this.$root.$on('border_alert', (type, wait = null) => {
			this.borderAlert(type).then(() => {
				if(wait) {
					this.sleep(wait).then(() => {
						this.borderClass(type, true);
					});
				}
			})
		})
	},
	methods: {
		gtag(){
			window.dataLayer.push(arguments)
		},
		borderAlert(type) {
			return new Promise((resolve, reject) => {
				switch (type) {
					case 'success':
						this.borderClass('success');
						break;
					case 'danger':
						this.borderClass('danger');
						break;
					default:
						reject('Error - Issue with type');
						break;
				}

				return resolve("Done")
			})
		},
		borderClass(addingClass, remove = false) {
			if(!remove) {
				return this.alertBorder(true).then(() => {
					document.querySelector('.alert-color').classList.add(addingClass);
				})
			}

			this.alertBorder(false).then(() => {
				this.sleep(300).then(() => {
					return document.querySelector('.alert-color').classList.remove(addingClass);
				})
			})


		},
		alertBorder(state) {
			return new Promise((resolve) => {
				if(!state) {
					document.querySelector('.alert-color').classList.remove('show');
					return resolve();
				}

				document.querySelector('.alert-color').classList.add('show');
				return resolve();
			})
		},
		sleep(milliseconds) {
			return new Promise(resolve => setTimeout(resolve, milliseconds))
		}
	}
}
</script>

<style lang="scss">
	@import "assets/scss/app";

	.noise {
		background-image: url("assets/noise.png");
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.25s ease;
	}


	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
