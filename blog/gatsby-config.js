require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: `Jeff's Cool Blog`,
        description: `Jeff's Cool Gatsby Blog.`,
        author: `Jeff Cate`,
        contact:{
            name:`Jeff Cate`,
            company:`Blogs Inc.`,
            address:`PO box 1234`
        }
    },
    plugins: [
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `${process.env.SPACE_ID}`,
                accessToken:`${process.env.ACCESS_TOKEN}`
            }
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
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
    ],
}