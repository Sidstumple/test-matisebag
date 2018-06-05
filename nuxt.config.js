module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'test-matisebag',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Test omgeving voor de matise bag' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
	/*
	** Global CSS
	*/
	css: [{
		src: '~assets/scss/app.scss',
		lang: 'scss'
	}],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
},
  plugins: [
	  {
		  src: '~/plugins/dynamic-components.js',
		  ssr: false
	  }
  ]
}
