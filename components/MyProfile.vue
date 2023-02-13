<template>
	<section class="my-profile px-90 py-70 my-profile--full-lg">
		<h1>My Profile</h1>
		<p>
			I’m Rahuldas, an energetic designer who combines rapid prototyping,
			interaction, and visual design to transform thorny problems into elegant
			solutions. In my previous organizations I have worked on extensively with
			clients across the globe on creative requirements in multiple domains
			like E-commerce, Education, Entertainment, Healthcare, IT, Manufacturing,
			Banking, Fashion, etc. Some of the projects that I have worked on are here.
		</p>
		<p>UI Design / creative direction / Branding & illustration.</p>
		<div class="download-resume">
			<a
				target="_blank"
				href="https://drive.google.com/file/d/1XzjTu5F_tMzT6H2CYhosDOIXkZB2kzmf/view?usp=sharing"
				>Download Resume
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="19"
					height="20"
					fill="none"
				>
					<path
						d="M8.65 16a.48.48 0 0 0 .35.152.48.48 0 0 0 .35-.152l3.54-3.53c.46-.46-.26-1.18-.71-.71l-1.71 1.71V2.13A1.47 1.47 0 0 0 9 .66a1.47 1.47 0 0 0-1.47 1.47v11.38L5.82 11.8c-.45-.47-1.17.25-.71.71L8.65 16zM8.53 2.13A.47.47 0 0 1 9 1.66a.47.47 0 0 1 .47.47v12.11a.47.47 0 0 1-.47.47.47.47 0 0 1-.47-.47V2.13zm9.52 14.27a3 3 0 0 1-3 2.94H3a3 3 0 0 1-3-2.94.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5 2 2 0 0 0 2 1.94h12a2 2 0 0 0 2-1.94.5.5 0 0 1 .5-.5.51.51 0 0 1 .383.131.51.51 0 0 1 .122.167c.029.064.044.132.045.202h0z"
						fill="#ff0651"
					/></svg
			></a>
			<NuxtLink class="hero-work" to="/profile">Profile</NuxtLink>
		</div>
		<div class="projects">
			<ul>
				<li class="project-logo">
					<img src="../assets/images/profile/Brand1.png" alt="" />
				</li>
				<li class="project-logo">
					<img src="../assets/images/profile/Brand2.png" alt="" />
				</li>
				<li class="project-logo">
					<img src="../assets/images/profile/Brand3.png" alt="" />
				</li>
				<li class="project-logo">
					<img src="../assets/images/profile/Brand4.png" alt="" />
				</li>
				<li class="project-logo">
					<img src="../assets/images/profile/Brand5.png" alt="" />
				</li>
				<li class="project-logo">
					<img src="../assets/images/profile/Brand6.png" alt="" />
				</li>
				<!-- <li class="project-logo">
					<img src="../assets/images/profile/Brand7.png" alt="" />
				</li> -->
			</ul>
			<ul class="logo-last">
				<li class="project-logo">
					<img src="../assets/images/profile/Brand8.png" alt="" />
				</li>
				<li class="project-logo">
					<img src="../assets/images/profile/Brand9.png" alt="" />
				</li>
				<li class="project-logo">
					<img src="../assets/images/profile/Brand10.png" alt="" />
				</li>
				<li class="project-logo">
					<img src="../assets/images/profile/Brand11.png" alt="" />
				</li>
				<li class="project-logo">
					<img src="../assets/images/profile/Brand12.png" alt="" />
				</li>
				<li class="project-logo">
					<img src="../assets/images/profile/Brand13.png" alt="" />
				</li>
				<!-- <li class="project-logo">
					<img src="../assets/images/profile/Brand14.png" alt="" />
				</li> -->
			</ul>
		</div>
	</section>
</template>
<style lang="scss" scoped>
.my-profile {
	position: relative;
	background-color: #fff;
	color: #000;
	z-index: 4;
	h1 {
		font-size: 33px;
		font-weight: 500;
		line-height: 1.1;
		margin-bottom: 26px;
	}
	p {
		font-size: 14px;
		font-weight: 300;
		line-height: 1.59;
		letter-spacing: 0.56px;
		@media screen and (max-width: 767px) {
			text-align: justify;
			letter-spacing: 0.3px;
    	line-height: 1.79;
		}
	}
	&--full-lg {
		@media screen and (min-width: 768px) {
			position: sticky;
			bottom: 0;
			min-height: auto;
			height: 100vh;
			overflow: hidden;
		}
	}
}
.download-resume {
	position: relative;
	margin-top: 62px;
	display: flex;
	align-items: center;
	@media screen and (min-width: 768px) {
		margin-top: 165px;
	}
	@media screen and (max-width: 767px) {
		margin-bottom: 56px;
	}
	a {
		text-transform: uppercase;
		text-decoration: none;
		font-size: 13px;
		font-weight: 500;
		font-stretch: condensed;
		letter-spacing: 0.28px;
		color: #000;
	}
	.hero-work {
		color: #ff0651;
		margin-top: 0;
		margin-bottom: 0;
		&:hover {
			color: #fff;
		}
  } 
}
.my-profile-xs__brand{
		display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    padding: 28px 0;
    margin: -25px -38px 25px -38px;
		li{
			margin-right: 16px;
		}
		@media screen and (min-width: 768px) {
			display: none
		}
}

</style>