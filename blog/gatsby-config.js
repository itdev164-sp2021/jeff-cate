module.exports = {
  siteMetadata: {
    title: `Gatsby Blog`,
    description: `ITDEV-164 Gatsby Blog.`,
    author: `Jeff Cate`,
    contact: {
      name: `Jeff Cate`,
      company: `Blogs Inc.`,
      address: `PO Box 1234`,
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'mfect66lp46u',
        accessToken: 'rqMbl9Yz_BRoYZ1_F-Jd-S86stwfGfQAmKRGa90qfDI'
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
