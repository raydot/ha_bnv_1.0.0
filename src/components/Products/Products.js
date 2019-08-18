//import React, { Component } from "react"
import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import ProductsCard from './ProductsCard'
// import { symlink } from "fs";

const containerStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '1rem 0 1rem 0',
}

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
