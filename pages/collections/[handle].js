import * as React from 'react';
import { storefront, collectionHandleQuery } from '../../lib/storefront'
import ProductDetails from '../../components/ProductDetails';
import CollectionModule from '../../components/CollectionModule';


export default function CollectionPage({collection: singleCollection}) {
	console.log(singleCollection)
	return (
    <div>
      <h1>test</h1>
    </div>

	);
}

export async function getStaticPaths() {
    const paths = await collectionHandleQuery();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { data } = await storefront(singleCollectionQuery, { handle: params.handle})
    return {
        props: {
            collection: data.collection,
        },
    };
}

const singleCollectionQuery = `
query SingleCollection($handle: String!) {
  collection(handle:$handle){
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
                url(transform:{preferredContentType: PNG})
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
