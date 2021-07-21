<template>
	<div class="about scam content">
		<div class="content-container">
			<div class="main-content">
				<div class="showcase">
					<span class="header">Warning</span>
					<h3 class="body text-center">
						It's your lucky day (kina), you really should check links before clicking! The domain you cliked was st<b>ee</b>mcomm<b>nn</b>ity.com not
						<a href="http://steamcommunity.com/" class="link">steamcommunity.com</a>
						<br>
						<br>
						Stay save %3C3
					</h3>
				</div>
			</div>
		</div>

		<div class="footer">
			<div class="label">
				<span class="page">NinjaLabs</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Scam.vue"
}
</script>

<style scoped>
.scam .showcase {
	display: flex;
	justify-content: center;
	align-items: center;
	border: .25em solid #f44336;
	padding: 2em;
	border-radius: .25em;
}

.text-center {
	text-align: center;
}

.link {
	color: #ffffff;
}
</style>