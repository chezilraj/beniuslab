<template>
	<section :class="['footer', { 'footer--sticky': isHomePage }]">
		<div class="have-a-project">
			<h2>Have a project ?</h2>
			<h3>let’s Make someting together!</h3>
		</div>
		<div class="footer-bottom">
			<div class="container-fluid px-160 footer-bottom__container">
				<div class="row">
					<div class="col-xs-12 col-md-4">
						<div class="email-id d-flex flex-column">
							<a href="mailto:rahuldaslr@gmail.com">rahuldaslr@gmail.com</a>
							<span>India / Bangalore</span>
						</div>
					</div>
					<div class="col-xs-12 col-md-4">
						<div class="download">
							<a target="_blank" href="https://drive.google.com/file/d/1XzjTu5F_tMzT6H2CYhosDOIXkZB2kzmf/view?usp=sharing"
								>DOWNLOAD RESUME
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
						</div>
					</div>
					<div class="col-xs-12 col-md-4">
						<div class="footer-social">
							<ul>
								<li><a target="_blank" href="https://www.behance.net/rahuldasr">Behance</a></li>
								<li><a target="_blank" href="https://www.behance.net/rahuldasr">Dribbble</a></li>
								<li><a target="_blank" href="https://www.linkedin.com/in/rahuldas-rahul-1b468397/">Linkedin</a></li>
								<li><a target="_blank" href="https://pin.it/7lYfHCW">Pintrest</a></li>
								<li><a target="_blank" href="https://www.instagram.com/rahuldasrahul/">Instagram</a></li>
								<li><a target="_blank" href="http://rahuldaskoduvayur.blogspot.com/">Blogspot</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="copy-right col-md-12 d-flex justify-content-center">
						<p>© {{ currentYear }} rahuldas. All Rights Reserved. Powered by <a target="_blank" href="https://www.linkedin.com/in/chezilraj/">ChezilR.</a></p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	data (){
		return {
			currentYear: new Date().getFullYear()
		}
	},
	computed: {
		isHomePage() {
			return $nuxt.$route.name === "index";
		},
	},
};
</script>
<style lang="scss" scoped>
.footer {
	position: relative;
	z-index: 2;
	padding-top: 161px;
	background-color: #fff;
	@media screen and (min-width: 768px) {
		padding-top: 278px;
	}
	.have-a-project {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		h2 {
			font-size: 34.9px;
			font-weight: 900;
			line-height: 0.31;
			letter-spacing: 0.7px;
			color: #161618;
			margin-bottom: 16px;
			@media screen and (min-width: 768px) {
				font-size: 56px;
				line-height: 1;
				letter-spacing: 1.13px;
			}
		}
		h3 {
			font-size: 13px;
			font-weight: 300;
			line-height: 1;
			letter-spacing: 1.56px;
			text-transform: uppercase;
			color: #000;
			border-bottom: 1px solid #161618;
			@media screen and (min-width: 768px) {
				font-size: 21px;
				letter-spacing: 2.52px;
			}
		}
	}
	.footer-bottom {
		width: 100%;
		margin-top: 148px;
		@media screen and (min-width: 768px) {
			margin-top: 238px;
		}
		&__container {
			@media screen and (min-width: 768px) {
				padding-bottom: 146px;
			}
		}
		.email-id {
			@media screen and (max-width: 767px) {
				align-items: center;
			}
			a {
				font-size: 22px;
				font-weight: 300;
				line-height: 1.36;
				letter-spacing: 0.44px;
				color: #000;
				text-decoration: none;
			}
			span {
				font-size: 12px;
				font-weight: 300;
				line-height: 1.36;
				letter-spacing: 0.24px;
				color: #000;
			}
		}
		.footer-social {
			@media screen and (max-width: 767px) {
				margin-top: 183px;
			}
			ul {
				display: flex;
				flex-wrap: wrap;
				margin-bottom: 4px;
				li {
					flex: 0 0 33.333333%;
					margin-bottom: 37px;
					@media screen and (max-width: 767px) {
						display: flex;
						justify-content: center;
					}
					@media screen and (min-width: 768px) {
						margin-bottom: 43px;
					}
				}
			}
			a {
				font-size: 16px;
				font-weight: 300;
				line-height: 1.36;
				letter-spacing: 0.32px;
				color: #000;
				text-decoration: underline;
			}
		}
		.copy-right {
			margin-top: 4px;
			@media screen and (min-width: 768px) {
				position: absolute;
				bottom: 0px;
				left: 0;
			}
			p {
				font-size: 10px;
				font-weight: 300;
				line-height: 1.36;
				letter-spacing: 0.2px;
				color: #000;
				margin-bottom: 21px;
			}
			a{
				color: #ff0651;
			}
		}
	}
	&--sticky {
		@media screen and (min-width: 768px) {
			justify-content: center;
			position: sticky;
			height: 100vh;
			bottom: 0;
			overflow: hidden;
		}
	}
}
</style>