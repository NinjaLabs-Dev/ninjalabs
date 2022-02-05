<template>
	<main class="me">
		<div class="hero row m-md-4 m-sm-2 m-0 justify-content-center">
			<div class="content col-lg-6 col-md-12 d-flex flex-column justify-content-center">
				<div>
					<h4 class="cli">
						<span class="target">Ninja@ninjalabs.dev</span>:<span class="dir">~</span>$ whoami
					</h4>

					<h1 class="title">Ninja
						<span class="pronouns">She/Her</span>
					</h1>
					<div class="blob w-75">
						<p class="sub">
							I'm a {{ age }} year old software developer from the UK, the north to be exact.
							I started playing around in <a href="https://scratch.mit.edu/" target="_blank">Scratch</a> and HTML when I was 11 and I never took my hands off the keyboard.
						</p>

						<p class="sub">
							Currently I specialise with the Laravel & Vue ecosystems along with NodeJS.
							I also have experience with Linux systems and packages like Apache and Nginx.
						</p>

						<p class="sub">
							I've recently started to get into building my own Homelab using systems like Docker, Unifi, Reverse Proxies, and other goodies.
						</p>
					</div>
				</div>
			</div>
			<div class="content showcase col-lg-6 col-md-12 mt-md-4 mt-sm-2 mb-sm-4 mb-2 mt-4">
				<img src="@/assets/code.png" alt="Picture of code" class="code-overview w-100 shadow">
			</div>
		</div>
	</main>
</template>

<script>

export default {
	name: 'Me',
	metaInfo: {
		title: 'Me'
	},
	data() {
		return {
			age: '..'
		}
	},
	created() {
		let ageDate = new Date(Date.now() - new Date(1061420400 * 1000));
		this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
	},
	methods: {

	},
	components: {
	}
}
</script>
