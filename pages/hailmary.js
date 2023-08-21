
import { storefront, collectionHandleQuery } from '../lib/storefront'

import React from 'react'

const hailmary = () => {
  experiment();
  // experimentProduct();
  return (
    <div>hailmary</div>
  )
}

export default hailmary

export async function experiment() {
  const { data } = await storefront(singleCollectionQuery, { handle: "casios"})
  console.log(data.collection)
}
export async function experimentProduct() {
  const { data } = await storefront(singleProductQuery, { handle: "custom-black-casio-world-time-watch-with-44968"})
  console.log(data)
}


const singleCollectionQuery = `
query getCollectionByHandle($handle: String!) {
  collection(handle: $handle) {
    title
    description
    products(first:50){
      edges{
        node{
          title
          handle
          description
          priceRange{
            minVariantPrice{
              amount
            }
          }
          images(first:1){
            edges{
              node{
                url(transform:{maxWidth:500})
                height
                width
                altText
              }
            }
          }
        }
      }
    }
  }
}
`

const reducedCol = `
query getCollectionByHandle($handle: String!) {
  collectionByHandle(handle: $handle) {
    title
    description
    products(first: 1) {
      edges {
        node {
          title
          handle
          description
        }
      }
    }
  }
}
`

const simpleQuery = `
query getCollectionByHandle($handle: String!) {
  collectionByHandle(handle: $handle) {
    title
    description
    products(first:1){
      edges{
        node{
          title
          handle
          description
        }
      }
    }
  }
}
`
// For some reason the async function getStaticProps is returning undefined. When I run the simpleQuery above, it does return a JSON. but if I use singleCollectionQuery, it returns undefined. I need to add to the simpleQuery until iit returns the same data as singleCollectionQuery soo I can get the collections pages working again. Working on it.
const singleProductQuery = `query SingleProduct($handle: String!) {
  productByHandle(handle:$handle) {
      title
      handle
      id
      description
      priceRangeV2 {
          minVariantPrice {
          amount
          }
      }
    images(first:10) {
      edges {
          node {
              url(transform:{preferredContentType: PNG, maxWidth:600})
              altText
          }
      }
    }
    variants(first:1) {
      edges {
        node {
          id
        }
      }
    }
  }
}`
