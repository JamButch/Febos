// gatsby-config.js
module.exports = {
  // ... tu configuración actual ...
  siteMetadata: {
    title: `Gatsby Default Starter`, // Puedes cambiar esto a `Escritorio Digital`
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    // ... tus plugins existentes ...
    `gatsby-plugin-image`,
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
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-abucms`,
      options: {
        baseUrl: "https://l8jh6zxpq1.execute-api.us-east-1.amazonaws.com",
        apiBase: "prod",
        models: ["febos_cl_blog"],
        apiKey: "559f3568887247778e89ca151f8fccfb",
        useCache: true,
      },
    },
  ],
};