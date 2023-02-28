import Head from 'next/head';
import ProductListing from '../components/ProductListing';
import { getProductList } from '../lib/getProductList';

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Cheese and Meat Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ul className="product-grid">
          {products.map((p, index) => {
            return <ProductListing key={`product${index}`} product={p.node} />;
          })}
        </ul>
      </main>

    </>
  );
}

export async function getStaticProps() {
  let products = await getProductList()
    .then((response) => {
      console.log('--- built home page ---');
      return response.products.edges;
    });

  return {
    props: {
      products,
    },
  };
}
