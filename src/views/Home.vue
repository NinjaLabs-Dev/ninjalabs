<template>
	<main class="home">
		<div class="hero">
			<div class="content">
				<h1 class="title">Hi, I'm Ninja</h1>
				<p class="sub">I'm a software developer from the UK</p>
			</div>

			<div class="showcase d-none d-md-block">
				<lottie-vue-player
					:src="`https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json`"
					:theme="lottieOptions.theme"
					:player-size="lottieOptions.playerSize"
					:speed="0.5"
					style="width: 100%"
				>
				</lottie-vue-player>
			</div>
		</div>

		<div class="panels row">
			<div class="panels-container col-lg-10 flex-column flex-md-row">
				<router-link tag="div" class="panel shadow col-lg-6 my-2 my-md-0 mx-0 mx-md-2" to="/about">
					<div class="content col-8 col-md-10">
						<h3 class="title">Me</h3>
						<p class="desc">Learn about who I am, and how on earth I got here.</p>
					</div>
				</router-link>

				<a href="#" target="_blank" class="panel shadow col-lg-6 my-2 my-md-0 mx-0 mx-md-2">
					<div class="content col-8 col-md-10">
						<p class="title-sub">Latest Project <i class='bx bx-lock' ></i></p>
						<h3 class="title">Radiocloud</h3>
						<p class="desc">Developing TruckersFM's staff panel allowing presenters to interact with listeners and view data easily.</p>
					</div>

					<a href="https://cdn.ninjalabs.dev/Q9Ukx" target="_blank" class="showcase">
						<div class="thumbnail" style="background: url('https://cdn.ninjalabs.dev/Q9Ukx');">
						</div>
					</a>
				</a>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: 'Home',
	metaInfo: {
		title: 'Home'
	},
	data() {
		return {
			lottieOptions: {
				minimizable: false,
				playerSize: "standard",
				backgroundColor: '#fff',
				backgroundStyle: 'color',
				theme: {
					controlsView: "standard",
					active: "light",
					light: {
						color: '#3D4852',
						backgroundColor: '#fff',
						opacity: '0.7',
					},
					dark: {
						color: '#fff',
						backgroundColor: '#202020',
						opacity: '0.7',
					}
				}
			}
		}
	}
}
</script>
