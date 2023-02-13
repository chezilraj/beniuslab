<template>
	<section class="grid-works">
		<div class="featured-work-grid" v-if="works && works.length > 0">
			<NuxtLink
				v-for="(work, index) in works"
				:key="index"
				:to="`works/${work.fields.slug}`"
				class="featured-work-grid__item"
			>
				<div
					v-if="work.fields.image"
					class="featured-work__img"
					:style="{
						backgroundImage: 'url(' + work.fields.image.fields.file.url + ')',
					}"
				></div>
				<div class="featured-work__content">
					<span>{{ work.fields.title }}</span>
					<h2>{{ work.fields.title }}</h2>
					<p>
						{{ work.fields.description }}
					</p>
				</div>
			</NuxtLink>
		</div>
	</section>
</template>
<script>
export default {
	props: {
		works: {
			type: Array,
			default: () => [],
		},
	},
	mounted() {
		document.body.style.overflowY = "auto";
	},
};
</script>
<style lang="scss" scoped>
.featured-work {
	&__img {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-size: cover;
		background-position: center center;
		transition: transform 0.85s 0.2s;
	}
	&__content {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		padding: var(--padding);
		z-index: 3;
		margin: auto;
		width: calc(100% - 140px);
		transition: transform 0.85s 0.2s;
		transform: translate(0, calc(100% - 5px));
		@media screen and (min-width: 768px) {
			transform: translate(0, calc(100% - 10px));
		}
		span {
			font-size: 10px;
			text-transform: uppercase;
			line-height: 46.8px;
			color: #ffffff;
			@media screen and (min-width: 768px) {
				font-size: 14px;
			}
		}
		h2 {
			font-size: 16px;
			line-height: 46.8px;
			letter-spacing: 0.56px;
			color: #ffffff;
			@media screen and (min-width: 768px) {
				font-size: 30px;
			}
			&::after {
				content: "";
				width: 100%;
				height: 1px;
				background-color: #fff;
				display: block;
				margin-top: 8px;
				margin-bottom: 8px;
				@media screen and (min-width: 768px) {
					margin-top: 18px;
					margin-bottom: 18px;
				}
			}
		}
		p {
			font-size: 10px;
			line-height: 22.2px;
			color: #ffffff;
			@media screen and (min-width: 768px) {
				font-size: 14px;
			}
		}
		padding-bottom: 111px;
	}
}
.featured-work-grid {
	display: flex;
	flex-wrap: wrap;
	&__item {
		position: relative;
		min-height: 360px;
		flex: 0 0 100%;
		background-color: #000000;
		padding-left: 8px;
		padding-right: 8px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		overflow: hidden;
		@media screen and (min-width: 768px) {
			min-height: 580px;
			flex: 0 0 33.333333%;
			padding-left: 44px;
			padding-right: 44px;
		}
		&:hover {
			.featured-work__content {
				transform: scale(1);
			}
			.featured-work__img {
				transform: scale(1.2);
			}
		}
		&::before {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-color: rgba(0, 0, 0, 0.4);
			content: "";
			z-index: 1;
		}
		&:nth-child(2n) {
			background-color: #454549;
		}
		.featured-work__content {
			padding-bottom: 8px;
			width: calc(100% - 16px);
			@media screen and (min-width: 768px) {
				width: calc(100% - 88px);
				padding-bottom: 14px;
			}
		}
	}
}
</style>