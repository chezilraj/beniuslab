<template>
	<section class="works">
		<div class="px-90">
			<h1>My Works</h1>
		</div>
		<swiper ref="mySwiper" class="swiper-work-slide" :options="swiperOptions">
			<swiper-slide v-for="(work, index) in works" :key="index">
				<NuxtLink v-if="work.fields" :to="`works/${work.fields.slug}`" class="work-link">
					<div class="work-slide">
						<img v-if="work.fields.image" :src="work.fields.image.fields.file.url" />
						<h3>{{ work.fields.title }}</h3>
						<p>
							{{ work.fields.description | splitString }}
						</p>
					</div>
				</NuxtLink>
			</swiper-slide>
			<div class="swiper-button swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button swiper-button-next" slot="button-next"></div>
		</swiper>
		<div class="d-flex justify-content-center"><NuxtLink class="view-all" to="/works">View all works</NuxtLink></div>
	</section>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	directives: {
		swiper: directive,
	},
	props: {
		works: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			swiperOptions: {
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
				slidesPerView: 1.2,
				spaceBetween: 15,
				breakpoints: {
					768: {
						slidesPerView: 3.65,
						spaceBetween: 33,
					},
				},
			},
		};
	},
	filters: {
		splitString: function (value) {
			if (!value) return "";
			return value.substring(0, 70) + "...";
		},
	},
};
</script>

<style lang="scss" scoped>
.works {
	background-color: #000;
	color: #fff;
	padding-top: 47px;
	overflow: hidden;
	@media screen and (min-width: 768px) {
		padding-top: 0px;
		position: sticky;
		bottom: 0;
		min-height: auto;
		height: 100vh;
		z-index: 3;
		display: flex;
    flex-direction: column;
    justify-content: center;
	}
	h1 {
		font-size: 25px;
		font-weight: 500;
		line-height: 1.45;
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media screen and (min-width: 768px) {
			font-size: 33px;
			line-height: 1.1;
		}
	}
	a.view-all {
		font-size: 10px;
		font-weight: bold;
		line-height: 1.39;
		letter-spacing: 1.28px;
		color: #fff;
		text-transform: uppercase;
		border-bottom: 1px solid #fff;
		text-decoration: none;
		@media screen and (min-width: 768px) {
			font-size: 14px;
		}
		@media screen and (max-width: 767px) {
			margin-bottom: 45px;
		}
	}
}

.subtitle {
	&::before {
		background-color: #fff;
	}
}

.swiper-work-slide {
	margin-top: 74px;
	padding-left: 38px;
	padding-bottom: 70px;
	width: 100%;
	@media screen and (min-width: 768px) {
		padding-left: 90px;
	}
	.work-slide {
		img {
			max-width: 100%;
			width: 100%;
			max-height: 380px;
			object-fit: cover;
			object-position: center;
			
		}
		h3 {
			font-size: 14px;
			font-weight: 900;
			line-height: 2.59;
			letter-spacing: 1.4px;
			color: #fff;
			margin-top: 11px;
			text-transform: uppercase;
		}
		p {
			font-size: 14px;
			font-weight: 300;
			line-height: 1.59;
			letter-spacing: 0.56px;
			color: #fff;
		}
	}
	.swiper-button-prev {
		left: 12px;
		top: 23%;
		@media screen and (min-width: 768px) {
			left: 62px;
			top: 32%;
		}
	}
	.swiper-button-next {
		right: 12px;
		top: 23%;
		@media screen and (min-width: 768px) {
			right: 12px;
			top: 32%;
		}
	}
	.swiper-button {
		width: 40px;
		height: 40px;
		background: #fff;
		border-radius: 50%;
		box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.3);
		@media screen and (min-width: 768px) {
			width: 58px;
			height: 58px;
		}
		@media screen and (max-width: 767px) {
			display: none;
		}
		&::after {
			font-size: 15px;
			color: #000;
			@media screen and (min-width: 768px) {
				font-size: 22px;
			}
		}
	}
	.swiper-pagination-progressbar {
		bottom: 120px;
		top: auto;
		background: #8a8a8a;
		height: 3px;
		left: 38px;
		width: calc(100% - 76px);
		@media screen and (min-width: 768px) {
			left: 90px;
			width: calc(100% - 180px);
		}
	}
}

.work-link{
	&:hover{
		text-decoration: none;
	}
}
</style>
<style lang="scss">
.swiper-pagination-progressbar {
	.swiper-pagination-progressbar-fill {
		background: #ff0651;
	}
}
</style>