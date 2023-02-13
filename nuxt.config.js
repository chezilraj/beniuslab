const config = require('./.contentful.json');
import axios from "axios";

let dynamicRoutes = () => {
	return axios.get('https://cdn.contentful.com/spaces/a8ms9msgebq8/environments/master/entries?content_type=works&access_token=MHds7Vy6u8p06VxSbtaE6S-k8yq612FD5tt9mAdt-_E').then((res)=>{
		if(res.data && res.data.items && res.data.items.length > 0)	{
			return res.data.items.map(work => `/works/${work.fields.slug}`)
		}
	})
}

export default {
	head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]
  },
	// generate: {
	// 	routes: [
	// 		'/works/hotel-booking-experience-one-six',
	// 		'/works/oreo',
	// 		'/works/lady-illustration',
	// 		'/works/tiger-manipulation',
	// 		'/works/master-card'
	// 	]
	// },
	generate: {
		routes: dynamicRoutes
	},
	loading: '@/components/LoadingBar.vue',
	env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_WORKS_TYPE_ID: config.CTF_WORKS_TYPE_ID,
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Benius lab',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
		'@/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

	ssr: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
