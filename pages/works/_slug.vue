<template>
	<section class="work-details" v-if="work">
		<WorkSingleHeader :work-details="work" />
		<div class="work-description">
				<div class="container">
						<div class="row">
							<div class="col-xs-12 col-md-6">
								<div class="work-meta">
									<span class="label">AGENCY</span>
									<span v-if="work.agency" class="value">{{ work.agency }}</span>
									<span class="label">ROLE</span>
									<span v-if="work.role" class="value">{{ work.role }}</span>
									<span class="label">DATE</span>
									<span v-if="work.date" class="value">{{ work.date }}</span>
								</div>
							</div>
							<div class="col-xs-12 col-md-6">
								<h2 v-if="work.title">{{ work.title }}</h2>
								<p v-if="work.description">{{ work.description}}</p>
							</div>
						</div>
				</div>
		</div>
		<div class="work-hero">
			<img v-if="work.heroBanner" :src="work.heroBanner.fields.file.url" />
		</div>
		<div class="work-look">
			<h2 v-if="work.workLookTitle">{{ work.workLookTitle }}</h2>
			<p v-if="work.workLookDescription">{{ work.workLookDescription }}</p>
			<ul class="px-90" v-if="work.workLook">
				<li v-for="(image, index) in work.workLook" :key="index"><img :src="image.fields.file.url" /></li>
			</ul>
		</div>
		<Footer/>
	</section>
</template>
<script>
import { createClient } from '~/plugins/contentful.js';
const client = createClient();

export default {
	async asyncData({ env, params, error }) {
		try {
			return Promise.all([
				// fetch all blog posts sorted by creation date
				client.getEntries({
						'content_type': env.CTF_WORKS_TYPE_ID,
						'fields.slug': params.slug,
					}),
				])
				.then(([posts]) => {
					// return data that should be available
					// in the template
					return {
						work: posts.items[0].fields,
					};
				})
				.catch(console.error);
		} catch (err) {
			error({
				statusCode: 404,
				message: 'Page could not be found',
			})
		}
	},
	head: {
    title: 'Rahuldas - Works',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Rahuldas is an energetic designer who combines rapid prototyping, interaction, and visual design to transform thorny problems into elegant solutions.'
      }
    ],
  }
}
</script>
<style lang="scss">
.work-description{
	padding: 60px 0;
	@media screen and (min-width: 768px) {
		padding: 196px 0;
	}
	h2{
	font-size: 45px;
	font-weight: 500;
	line-height: 1.09;
  color: #161618;
	max-width: 500px;
	margin-bottom: 30px;
	}
	p{
		font-size: 14px;
		font-weight: 300;
		line-height: 1.59;
		letter-spacing: 0.56px;
		color: #000;
	}
	.work-meta{
		display: none;
		flex-direction: column;
		align-items: flex-end;
		padding-right: 80px;
		padding-top: 50px;
		@media screen and (min-width: 768px) {
			display: flex;
		}
		span{
			font-size: 14px;
			line-height: 1.69;
		}
		.label{
			text-transform: uppercase;
		}
		.value{
			margin-bottom: 30px;
		}
	}
}
.work-hero{
	max-height: 843px;
	overflow: hidden;
	img{
		width: 100%;
		max-width: 100%;
	}
}
.work-look{
	padding: 60px 0;
	text-align: center;
		@media screen and (min-width: 768px) {
			padding: 85px 0;
		}
	h2{
		font-size: 45px;
		font-weight: 500;
		line-height: 0.96;
		color: #161618;
		padding-bottom: 16px;
		max-width: 336px;
		text-align: center;
		    margin: auto;
	}
	p{
		font-size: 14px;
		font-weight: 300;
		line-height: 1.73;
		text-align: center;
		color: #161618;
		max-width: 428px;
		padding-bottom: 56px;
		margin: auto;
	}
	ul{
		li{
			margin-bottom: 30px;
				@media screen and (min-width: 768px) {
					margin-bottom: 85px;
				}
			img{
				max-width: 100%;
			}
		}
	}

}
</style>