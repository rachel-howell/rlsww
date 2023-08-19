
import { storefront, collectionHandleQuery } from '../lib/storefront'

import React from 'react'

const hailmary = () => {
  experiment();
  return (
    <div>hailmary</div>
  )
}

export default hailmary

export async function experiment() {
  const { data } = await storefront(simpleQuery, { handle: "casios"})
  console.log(data.collectionByHandle)
}

const singleCollectionQuery = `
query getCollectionByHandle($handle: String!) {
  collectionByHandle(handle: $handle) {
    title
    description
    products(first:50){
      edges{
        node{
          title
          handle
          description
          priceRangeV2{
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

const simpleQuery = `
query getCollectionByHandle($handle: String!) {
  collectionByHandle(handle: $handle) {
    title
    description
    products(first:50){
      edges{
        node{
          title
        }
      }
    }
  }
}
`
// For some reason the async function getStaticProps is returning undefined. When I run the simpleQuery above, it does return a JSON. but if I use singleCollectionQuery, it returns undefined. I need to add to the simpleQuery until iit returns the same data as singleCollectionQuery soo I can get the collections pages working again.
