import * as React from 'react';
import { storefront, collectionHandleQuery } from '../../lib/storefront'
import ProductDetails from '../../components/ProductDetails';
import ProductList from '../../components/ProductList';
import CollectionModule from '../../components/CollectionModule';


export default function CollectionPage({collection: singleCollection}) {
	console.log(singleCollection)
	return (
    <div>
      <div className="flex flex-col items-center mt-5">
        <h1 className="text-5xl">{singleCollection.title}</h1>
        <p>{singleCollection.description}</p>
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
                url(transform:{maxWidth:300})
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
