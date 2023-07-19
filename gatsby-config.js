module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    siteUrl: `https://www.stinsenstradgard.se`,
    title: `Stinsens trädgård | Beskärning och skötsel av fruktträd i Östersund`,
    description: `Stinsen erbjuder hjälp vid skötsel av träd och buskar för att ge mesta möjliga tillväxt och skörd av era äpplen, plommon, körsbär och andra frukter och bär.`,
    author: `Christina Persson`,
    googleSiteVerification: `hDG_6_BHAf4gu8J8mGqZz2atU9sWRY6e-dI1zoSnUVA`,
    bingSiteVerification: `065B57625834A5987E85611695D3E416`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `stinsens-tradgard`,
        short_name: `stinsens-tradgard`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/stinsenstradgard-512x512.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Merriweather`,
            file: `https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap`,
          },
          {
            name: `Merriweather+Sans`,
            file: `https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;700&display=swap`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
  ],
}
