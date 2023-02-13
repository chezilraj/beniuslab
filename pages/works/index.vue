<template>
	<section class="all-works">
		<WorkHeader/>
		<AllWorks :works="posts"/>
		<Footer/>
	</section>
</template>
<script>
import works from '~/mixins/works.js';

export default {
	mixins: [works],
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