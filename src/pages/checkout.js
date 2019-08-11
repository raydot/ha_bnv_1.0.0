import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Products from '../components/Products/Products'

const checkout = () => (
  <Layout>
    <h1>This is the advanced example</h1>
    <Products />
    <Link to="/">Go back to the easy example</Link>
  </Layout>
)

export default checkout