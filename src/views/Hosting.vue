<template>
	<main class="projects">
		<div class="hero text-center">
			<div class="content">
				<h1 class="title">Website Hosting</h1>
				<p class="sub">Helping your site reach it's full potential.</p>
			</div>
		</div>

		<div class="panels row">
			<div class="panels-container flex-column flex-xl-row col-12 col-xl-10">
				<div class="panel shadow col-12 col-xl-7">
					<div class="content">
						<h3 class="title">Hosting a website is <b>complicated</b>.</h3>
						<p class="desc">We want to make it simple!<br><br>Used a site builder but can't use your fancy domain without paying to go <i>pro</i>?<br> Had a website bespoke website made just for you but have no idea how to host it?<br>Just need someone to look after all the details for you while you focus on your company?<br><br>Contact us! We'll find a solution just for <i>you</i>.</p>
						<div class="breaker"></div>
					</div>
				</div>

				<div class="panel shadow col-12 col-xl-5 ml-0 ml-xl-1 mt-4 mt-xl-0 align-items-start mx-0 mx-md-2">
					<div class="content d-flex h-100 flex-column justify-content-between">
						<div>
							<h3 class="title">Contact Us</h3>
							<p class="desc">Don't worry, we don't charge just to ask a question!</p>
						</div>
						<div>
							<a href="mailto:projects@ninjalabs.dev?subject=Web Hosting Request">
								<el-button class="w-100 contact-button" type="primary" size="large">projects@ninjalabs.dev</el-button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: 'Hosting',
	metaInfo: {
		title: 'Hosting'
	},
	data() {
		return {
		}
	}
}
</script>
