import * as React from 'react';
import { storefront, productHandleQuery } from '../../lib/storefront'
import ProductDetails from '../../components/ProductDetails';


export default function ProductPage({product: singleProduct}) {
	return (
    <div>
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
  product(handle: $handle) {
    title
    handle
    id
    descriptionHtml
    priceRange {
      minVariantPrice {
        amount
      }
    }
    images(first: 10) {
      edges {
        node {
          url(transform: {preferredContentType: PNG, maxWidth: 600})
          altText
        }
      }
    }
    variants(first: 5) {
      edges {
        node {
          id
          title
        }
      }
    }
    availableForSale
    descriptionHtml
    options {
      id
      name
      values
    }
    seo {
      description
      title
    }
    tags
  }
}
`
