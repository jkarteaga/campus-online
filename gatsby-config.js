/* eslint-env node */
module.exports = {
	siteMetadata: {
		title: 'Gatsby + Netlify CMS Starter',
	},
	plugins: [
		'gatsby-plugin-styled-components',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-eslint',
			options: {
				test: /\.js$|\.jsx$/,
				exclude: /(node_modules|cache|public)/,
				options: {
					emitWarning: true,
					failOnError: false,
				},
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/assets/images`,
				name: 'images',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [],
			},
		},
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`,
			},
		},
		'gatsby-plugin-no-sourcemaps',
		'gatsby-plugin-netlify', // make sure to keep it last in the array
	],
}
