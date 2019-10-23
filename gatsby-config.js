module.exports = {
  siteMetadata: {
    title: `Tim Atherton`,
    description: `Tim Atherton Portfolio Site`,
    author: `Tim Atherton`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tim Atherton Portfolio`,
        short_name: `Tim Atherton`,
        start_url: `/`,
        background_color: `#0f4975`,
        theme_color: `#0f4975`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
