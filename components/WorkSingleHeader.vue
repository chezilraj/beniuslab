<template>
	<section class="work-single-header">
		<Header />
		<div class="container-fluid">
			<div class="row work-single__content">
				<div class="col-xs-12 col-md-6 px-0 work-single__content--black">
					<div class="px-90">
						<h1 v-if="workDetails.title">{{ workDetails.title }}</h1>
						<div class="work-meta">
							<span class="label">PROJECT</span>
							<span v-if="workDetails.project" class="value">{{ workDetails.project }}</span>
							<span class="label">INDUSTRY</span>
							<span v-if="workDetails.industry" class="value">{{ workDetails.industry }}</span>
							<span class="label">SERVICES</span>
							<span v-if="workDetails.services" class="value">{{ workDetails.services }}</span>
							<span class="label">TOOLS</span>
							<span v-if="workDetails.tools" class="value">{{ workDetails.tools }}</span>
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-md-6 px-0">
					<img v-if="workDetails.banner" :src="workDetails.banner.fields.file.url" alt="work">
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	props: {
		workDetails: {
			type: Object,
			default: () => {},
		},
	}
};
</script>

<style lang="scss" scoped>
	.work-single-header{
		position: relative;
		z-index: 3;
		@media screen and (min-width: 768px) {
			height: 100vh;
		}
	}
	.work-single__content{
		position: relative;
		margin-left: -15px;
    margin-right: -15px;
		@media screen and (max-width: 767px) {
			flex-direction: column-reverse;
		}
		@media screen and (min-width: 768px) {
			position: absolute;
			top: 0;
			left: 0;
			margin: 0;
			width: 100%;
		}
		h1{
			font-size: 45.6px;
			font-weight: bold;
			letter-spacing: -0.46px;
			color: #fff;
			margin-bottom: 48px;
			max-width: 334px;
		}
		img{
		width: 100%;
		max-width: 100%;
		height: 100vh;
    object-fit: cover;
    object-position: center;
		}
		&--black{
			    display: flex;
    align-items: center;
    justify-content: center;
			background-color: #161618;
				@media screen and (max-width: 767px) {
					padding-top: 38px;
					padding-bottom: 38px;
				}
		}
	}
	.work-meta{
		color: #fff;
		display: flex;
		flex-direction: column;
		span{
			font-size: 14px;
			line-height: 2.09;
		}
		.label{
			text-transform: uppercase;
		}
		.value{
			margin-bottom: 40px;
		}
	}
</style>