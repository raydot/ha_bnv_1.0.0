//import React, { Component } from "react"
import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ProductsCard from './ProductsCard'
// import { symlink } from "fs";

const containerStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '1rem 0 1rem 0',
}

// class Products extends Component {
//     state = {
//         stripe: null,
//     }

//     componentDidMount() {
//         const stripe = window.Stripe(process.env.STRIPE_SECRET_KEY)
//         this.setState({ stripe })
//         //console.log("this.state:", this.state)
//     }

//     render() {
//         //console.log("stripe:", this.state)
//         return (
    export default props => (
            <StaticQuery
                query={graphql`
                    query ActiveProductsQuery {
                        products: allStripeProduct(filter: {metadata: {is_live: {eq: "true"}}}) {
                            edges {
                                node {
                                    id
                                    name
                                    active
                                    metadata {
                                        price
                                    }
                                }
                            }
                        }
                    }
                `}

                render={({ products }) => (
                    <div style={containerStyles}>
                        {products.edges.map(({ node: product }) => (
                            <ProductsCard {...props} key={product.id} product={ product } />
                        ))}
                    </div>
                )}
            />
        )
//    }
//}

//export default Products