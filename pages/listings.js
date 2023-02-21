import Head from 'next/head'
import shopify from 'shopify-api-node';

export default function Listings({products}) {
    return (
        <div>
            <Head>
                <title>RLSWW Watch Listings</title>
                <meta name="description" content="Watches currently for sale" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.body_html}</p>
                    </li>
                ))}
            </ul>
            </main>
        </div>
    );
  }

export async function getServerSideProps() {
const products = await shopify.product.list();
return {
    props: {
    products,
    },
};
}