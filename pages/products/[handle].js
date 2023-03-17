import * as React from 'react';
import { storefront, productHandleQuery } from '../../lib/storefront'
import ProductDetails from '../../components/ProductDetails';


export default function ProductPage({product: singleProduct}) {
	console.log(singleProduct)
	return (
    <div>
      <h1>test</h1>
      <ProductDetails product={singleProduct} />
    </div>

	);
}

export async function getStaticPaths() {
    const paths = await productHandleQuery();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { data } = await storefront(singleProductQuery, { handle: params.handle})
    return {
        props: {
            product: data.product,
        },
    };
}

const singleProductQuery = `
query SingleProduct($handle: String!) {
    product(handle:$handle) {
        title
        handle
        id
        description
        priceRange {
            minVariantPrice {
            amount
            }
        }
      images(first:1) {
        edges {
            node {
                url(transform:{preferredContentType: PNG})
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
  }
`
