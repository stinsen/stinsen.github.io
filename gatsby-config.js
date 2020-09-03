module.exports = {
  pathPrefix: `/gatsby-creative`,
  siteMetadata: {
    title: `Beskärning och skötsel av fruktträd i Östersund, Jämtland`,
    description: `Stinsens trädgård, hjälp och råd vid beskärning och skötsel av fruktträd i Östersund, Jämtland`,
    author: `Christina Persson`,
    googleSiteVerification: `hDG_6_BHAf4gu8J8mGqZz2atU9sWRY6e-dI1zoSnUVA`
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
        icon: `src/images/stinsenstradgard-512x512.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Merriweather:400,300,300italic,400italic,700,700italic",
            "Merriweather+Sans:400,700",
          ],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
