module.exports = {
  siteMetadata: {
    title: "Gatsby Starter - Strata by HTML5 UP",
    author: "Hunter Chang",
    description: "A Gatsby.js Starter based on Strata by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `@conradlin/gatsby-source-notion-database`,
      options: {
        sourceConfig: [
          {
            name: 'posts',
            table: 'https://www.notion.so/58438faa103e4165aacd136c5de87add?v=800b91f016fe433885487ce94fe030f1',
            cacheType: 'html'
          }
        ]
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
