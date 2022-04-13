const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: 'Will Humphlett',
    description: 'Will Humphlett is a software engineer who writes code.',
    siteUrl: 'https://willhumphlett.com',
    image: '/og.png',
    twitterUsername: '@willhumphlett',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Will Humphlett',
        short_name: 'WillHumphlett',
        start_url: '/',
        background_color: config.colors.black,
        theme_color: config.colors.black,
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          "G-DRXT1TX1T7"
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
}
