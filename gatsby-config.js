module.exports = {
  siteMetadata: {
    siteUrl: 'https://info-screen.jsconfbp.com',
    title: 'JSConf Budapest Info Screen',
    description: '',
    keywords: '',
    twitter: '@jsconfbp'
  },
  pathPrefix: `/info-screen`,
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`sponsor-images`,
        path: `${__dirname}/sponsors`,
        ignore: [ `**/\.*` ], // ignore files starting with a dot
      }
    },
    'gatsby-plugin-force-trailing-slashes',
    'gatsby-plugin-react-helmet',

    `gatsby-plugin-image`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: `${__dirname}/src/images`,
          }
      }
    },
  ],
}
