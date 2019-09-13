module.exports = {
  siteMetadata: {
    siteUrl: 'http://2015.jsconfbp.com/info-screen/',
    title: 'Info Screen',
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
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300`,`400`,`700`],
          },
          {
            family: `Rubik`,
            variants: [`300`,`400`,`700`]
          },
        ],
      },
    }
  ],
}
