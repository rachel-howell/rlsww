import * as React from 'react';
import { storefront, collectionHandleQuery } from '../../lib/storefront'
import ProductList from '../../components/ProductList';


export default function CollectionPage({collection: singleCollection}) {
  console.log(singleCollection)
	return (
    <div>
      <div className="flex flex-col items-center mt-5 sm:p-0 px-5">
        <h1 className="text-5xl mb-4">{singleCollection.title}</h1>
        <p className="mb-5">{singleCollection.description}</p>
      </div>

      <ProductList products={singleCollection.products} />
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
