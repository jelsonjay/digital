module.exports = {
  siteMetadata: {
    title: "digital-ja",
    description: "Digital-ja- designer and developer specialized in designing web interfaces.",
    author: "Jelson J",
    linkedUsername: "https://www.linkedin.com/digital-ja",
    siteUrl: "https://digital-jas.com",
  },
  plugins: [

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,

    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`],
          },
          {
            family: `Open Sans`,
          },
        ],
      },
    },

  ],
};
