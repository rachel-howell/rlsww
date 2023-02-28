import Head from 'next/head';
// import ProductListing from '../components/ProductListing';
// import { getProductList } from '../lib/getProductList';
import { storefront } from '../lib/storefront'

export default function Home({ products }) {

  console.log(products)
  return (
    <>
      <Head>
        <title>EXPERIMENTAL PAGE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <ul className="product-grid">
          {products.map((p, index) => {
            return <ProductListing key={`product${index}`} product={p.node} />;
          })}
        </ul> */}
      </main>

    </>
  );
}

export async function getStaticProps() {
  const { data } = await storefront(productsQuery)

  return {
    props: {
      products: data.products
    },
  };
}

const productsQuery = `
  query Products {
    products(first:6) {
      edges {
        node {
          title
          handle
          tags
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first:1) {
            edges {
              node {
                transformedSrc
                altText
              }
            }
          }
        }
      }
    }
  }
`