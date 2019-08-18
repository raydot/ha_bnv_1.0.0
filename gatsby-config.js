require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Beyond Napa Valley`,
  },
<<<<<<< HEAD
  
=======
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-stripe',
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Balance', 'BalanceTransaction', 'Product', 'ApplicationFee', 'Sku', 'Subscription'],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
      }
    }
  ]
>>>>>>> 80fc5cb265eb3bcb3cb77ad9be137436fe8cc118
}