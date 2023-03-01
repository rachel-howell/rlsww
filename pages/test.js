import Head from 'next/head';
// import ProductListing from '../components/ProductListing';
// import { getProductList } from '../lib/getProductList';
import { storefront, productHandleQuery } from '../lib/storefront'

export default function Home({ products }) {

  console.log(products)
  return (
    <>
      <Head>
        <title>EXPERIMENTAL PAGE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <li className="p-3">
          {products.edges.map((p, index) => (
            <p>{ p.node.handle }</p>
          ))}
        </li> */}
      </main>

    </>
  );
}

// export async function getStaticProps() {
//   const { data } = await storefront(productsQuery)

//   return {
//     props: {
//       products: data.products
//     },
//   };
// }
export async function getStaticProps() {
  const responsee = await productHandleQuery();

  return {
    props: {
      products: responsee
    },
  };
}

const productsQuery = `
  query Products {
    products(first:10) {
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