<template>
	<main class="contact">
		<div class="hero text-center">
			<div class="content">
				<h1 class="title">Contact</h1>
				<p class="sub">Where you can contact me</p>
			</div>
		</div>

		<div class="panels row">
			<div class="panels-container col-lg-10">
				<div class="panel shadow col-lg-9 align-items-start">
					<div class="content w-100 d-flex h-100 flex-column">
						<div class="projects d-flex flex-column">
							<div class="row px-4 flex-column align-items-center">
								<div class="row justify-content-between">
									<div class="col-12 col-md-6">
										<el-card class="my-4">
											<h4><i class="bx bxl-discord-alt exp-icon-lg"></i> Ninja#4321</h4>
										</el-card>
									</div>

									<div class="col-12 col-md-6">
										<el-card class="my-4">
											<h4><i class="bx bxl-twitter exp-icon-lg"></i> <a href="https://twitter.com/NinjaLabs_" target="_blank">@NinjaLabs_</a></h4>
										</el-card>
									</div>
								</div>

								<div class="row justify-content-between">
									<div class="col-12 col-md-6">
										<el-card class="my-4">
											<h4><i class="bx bxl-github exp-icon-lg"></i> <a href="https://github.com/NinjaLabs-Dev" target="_blank">NinjaLabs-Dev</a></h4>
										</el-card>
									</div>

									<div class="col-12 col-md-6">
										<el-card class="my-4">
											<h4><i class="bx bx-mail-send exp-icon-lg"></i> <a href="mailto:fraser@ninjalabs.dev" target="_blank">fraser@ninjalabs.dev</a></h4>
										</el-card>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: 'Contact',
	metaInfo: {
		title: 'Contact'
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
