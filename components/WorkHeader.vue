<template>
	<section class="work-header">
		<Header is-white />
		<div class="work-header__content px-90">
			<h1>My Works</h1>
			<p>He has worked on previous organization extensively with clients across the globe on creative requirements, in multiple domains like E-commerce, Education, Entertainment, Healthcare, IT, Manufacturing, Banking, Fashion, etc. Some of the project that he has worked on are here. UI Design / creative direction / Branding & illustration.</p>
		</div>
	</section>
</template>
<style lang="scss" scoped>
	.work-header{
		position: relative;
		z-index: 3;
		padding-top: 68px;
		padding-bottom: 80px;
			@media screen and (min-width: 768px) {
				padding-bottom: 161px;
			}
		&__content{
			margin-top: 113px;
			max-width: 1200px;
			h1{
				font-size: 60px;
				color: #161618;
				margin-bottom: 39px;
			}
			p{
				font-size: 13px;
				line-height: 22.2px;
				letter-spacing: 0.52px;
				color: #414140;
			}
		}
	}
</style>