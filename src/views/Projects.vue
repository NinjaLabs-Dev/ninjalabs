<template>
	<main class="projects">
		<div class="hero text-center">
			<div class="content">
				<h1 class="title">Experience</h1>
				<p class="sub">View my work experience and recent projects</p>
			</div>
		</div>

		<div class="panels row">
			<div class="panels-container flex-column flex-xl-row col-12 col-xl-10">
				<div class="panel shadow col-12 col-xl-6">
					<div class="content">
						<h3 class="title">Work Experience</h3>
						<p class="desc">A brief summary of my current work experience.</p>
						<div class="breaker"></div>
						<el-timeline>
							<el-timeline-item :timestamp="exp.timespan" placement="top" v-for="(exp, i) in experience" :key="i">
								<el-card>
									<div>
										<a href="https://sypo.uk" target="_blank" v-if="exp.link"><h4>{{ exp.name }} <i class="bx bx-link-external exp-icon"></i></h4></a>
										<h4 v-else>{{ exp.name }}</h4>
										<p>{{ exp.description }}</p>
										<div class="mt-4">
											<div class="card shadow-sm mb-2" :class="pos.color" v-for="(pos, x) in exp.positions" :key="x">
												<div class="card-body">
													<p class="mb-0" v-for="(p, y) in pos.content" :key="y">{{ p }}</p>
												</div>
											</div>
										</div>
									</div>
								</el-card>
							</el-timeline-item>
						</el-timeline>
					</div>
				</div>

				<div class="panel shadow col-12 col-xl-6 ml-0 ml-xl-1 mt-4 mt-xl-0 align-items-start mx-0 mx-md-2">
					<div class="content d-flex h-100 flex-column">
						<h3 class="title">Latest Projects</h3>
						<p class="desc">What I've been working on recently.</p>
						<div class="breaker"></div>

						<div class="projects d-flex flex-column flex-grow-1 pt-4">
							<el-card class="mb-4" v-for="(project, i) in projects" :key="i">
								<div class="row">
									<div class="col-8 col-xl-9">
										<a v-if="project.github" :href="project.github" target="_blank"><h4>{{ project.name }} <i class="bx bxl-github exp-icon"></i></h4></a>
										<h4 v-else>{{ project.name }} <i class="bx bxs-lock-alt exp-icon" v-if="project.private"></i></h4>
										<div class="card no-border shadow-sm mb-2 mt-4">
											{{ project.description }}
										</div>
									</div>
									<div class="col-4 col-xl-3 d-flex justify-content-end">
										<a :href="project.image" target="_blank" class="showcase">
											<div class="thumbnail" :style="{background: `url('${project.image}')`}">
											</div>
										</a>
									</div>
								</div>
							</el-card>

							<el-card class="mb-4">
								<div class="row">
									<div class="col-12 text-center">
										<p class="mb-0">Want to see more of my work? Check out my <a href="https://github.com/NinjaLabsDev" target="_blank">Github</a>!</p>
									</div>
								</div>
							</el-card>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: 'Experience',
	metaInfo: {
		title: 'Experience'
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
			},
			experience: [
				{
					name: 'SYPO',
					link: 'https://sypo.uk',
					timespan: '17/12/2020 - Present',
					description: 'Working as a professional developer with a small team using Laravel and Vue.',
					positions: [
						{
							content: [
								'Web Developer (01/12/2021 - Present)',
								'Junior Web Developer (17/12/2020 - 01/12/2021)'
							],
							color: 'border-left-primary'
						}
					]
				},
				{
					name: 'TruckersFM',
					link: 'https://truckers.fm',
					timespan: '7/9/2018 - Present',
					description: 'Work for TruckersFM consisted from developing a login panel for presenters to login into and access data like requests, listener stats, song playback and more. I also worked with the main website allowing listeners to check stats, send requests and more.',
					positions: [
						{
							content: [
								'Presenter (7/9/2018 - Present)'
							],
							color: 'border-left-primary'
						},
						{
							content: [
								'Discord Admin (30/1/2021 - Present)',
								'Discord Moderator (9/2/2019 - 30/1/2021)'
							],
							color: 'border-left-danger'
						},
						{
							content: [
								'Developer (14/11/2020 - Present)'
							],
							color: 'border-left-info'
						}
					]
				},
				{
					name: 'Little Los Santos RP - FiveM',
					timespan: '20/09/2019 - 20/10/2020',
					description: 'Worked on MDT (Mobile Data Terminal) for a FiveM roleplay server, this consisted of a login panel which allowed record management for police, medical and fire services. It also linked with multiple databases to gain information about users within the virtual city.',
					positions: [
						{
							content: [
								'Developer (20/09/2019 - 20/10/2020)'
							],
							color: 'border-left-primary'
						}
					]
				}
			],
			projects: [
				{
					name: 'NinjaLabs Backend',
					private: true,
					description: 'Custom made backend for image and document hosting. Also includes server status checks.',
					image: 'https://cdn.ninjalabs.dev/vLmPA'
				},
				{
					name: 'Radiocloud',
					private: true,
					description: 'Custom panel for presenters of TruckersFM allowing users to interact with listeners and see data.',
					image: 'https://cdn.ninjalabs.dev/Q9Ukx'
				},
				{
					name: 'Children\'s Trust Convoy',
					private: true,
					description: 'Created a bespoke website tailored towards the clients needs and desires allowing login to change route and slot allocations.',
					image: 'https://cdn.ninjalabs.dev/gxrOK'
				},
				{
					name: 'Myriad 5 Meta',
					github: 'https://github.com/NinjaLabs-Dev/myriad-5-now-playing',
					description: 'A powerful script to get now playing data from Myriad and output to a .txt file.',
					image: 'https://cdn.ninjalabs.dev/9T2k1',
				},
			]
		}
	}
}
</script>
