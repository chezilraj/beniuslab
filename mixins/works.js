import { createClient } from '~/plugins/contentful.js';
const client = createClient();

export default {
	// `env` is available in the context object
	asyncData({ env, store }) {
		return Promise.all([
			// fetch all blog posts sorted by creation date
			client.getEntries({
					content_type: env.CTF_WORKS_TYPE_ID,
					order: "-sys.createdAt",
				}),
			])
			.then(([posts]) => {
				// return data that should be available
				// in the template
				store.commit('addWork', posts.items)
				return {
					posts: posts.items,
				};
			})
			.catch(console.error);
	},
}