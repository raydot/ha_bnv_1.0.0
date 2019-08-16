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


  
 
  render() {
    return (
    <Layout>
      <Products />
    </Layout>
    )
  }
}

export default Checkout