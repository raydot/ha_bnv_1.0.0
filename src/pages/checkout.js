import React from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/layout'
import Products from '../components/Products/Products'

const Checkout = class extends React.Component {
  componentDidMount() {
    // Initialize stripe
    this.stripe = window.Stripe('pk_live_JiuW8AAXc0SFjR3eWDnqV45d00xmHijzzA', {
      betas: ['checkout_beta_4'],
    })
  }

  // this was moved from the ProductsCard
  async redirectToCheckout(event, product, quantity = 1) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
        items: [{ product, quantity }],
        successUrl: `http://beyondnapavalley.com/dashboard/`,
        cancelUrl: `http://beyondnapavalley/pricing/`,
    })
    if (error) {
        console.warn("Error:", error)
    }
  }
 
  render() {
    return (
    <Layout>
      <Products />
    </Layout>
    )
  }
}

export default Checkout