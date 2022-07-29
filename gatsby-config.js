module.exports = {
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    }
  ],

  siteMetadata: {
    title: "Test Title",
    description: "Web Dev Portfolio.",
    copyright: "This website is copyright 2022 web warrior."
  }
}
