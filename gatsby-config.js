require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Beyond Napa Valley",
  },
  plugins: [
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Balance', 'BalanceTransaction', 'Product', 'ApplicationFee', 'Sku', 'Subscription'],
        secretKey: 'sk_live_0XREXIYoe9TMYkg1Cf78HWkh005OtIT5go',
        downloadFiles: true,
      }
    }
  ]
}