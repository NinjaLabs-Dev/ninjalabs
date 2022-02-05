<template>
	<main class="error">
		<div class="flashlight" v-if="flashlightDisplay"></div>

		<div class="error-content">
			<h1 class="title">404</h1>
			<p class="sub">Hm, it seems you went down the wrong alleyway.</p>
			<p class="sub">Not to worry. The light is this way!</p>
			<p class="small sub">Now... was it right or left...</p>
			<router-link to="/" class="return" tag="button">The light <i class='bx bx-sun' ></i></router-link>
		</div>
	</main>
</template>

<script>

export default {
	name: 'NotFound',
	metaInfo: {
		title: '404',
	},
	data() {
		return {
			flashlightDisplay: false
		}
	},
	mounted() {
		document.addEventListener('mousemove', (mouse) => {
			this.flashlightDisplay = true;
			if(document.querySelector('.flashlight')) {
				document.querySelector('.flashlight').style.top = `${mouse.clientY - 100}px`;
				document.querySelector('.flashlight').style.left = `${mouse.clientX - 100}px`;
			}
		})
	},
	methods: {

	},
	components: {
	}
}
</script>
