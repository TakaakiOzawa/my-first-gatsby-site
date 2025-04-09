/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `カゲゴノミ`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.png`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `content`,
        path: `${__dirname}/contents`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: 'Ot6fTSrQkiLC5P01iRJFGzE6GRoowxHMSwFe',
        serviceId: 'kagegonomitest',
        apis: [
          {
            endpoint: 'contents',
          },
        ],
      },
    },
  ],
}
