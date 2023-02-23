import Head from 'next/head'
import ProductList from '../components/ProductList'
import { shopifyClient, parseShopifyResponse } from '../lib/shopify';

export default function Listings({product}) {
    console.log(product)
    return (
        <div>
            <Head>
                <title>RLSWW Watch Listings</title>
                <meta name="description" content="Watches currently for sale" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
            {/* <ProductList products={products}/> */}
            <p>test</p>
            </main>
        </div>
    );
}

// export const getServerSideProps = async () => {
// 	// Fetch all the products
// 	const products = await shopifyClient.product.fetchAll();
// 	return {
// 		props: {
// 			products: parseShopifyResponse(products),
// 		},
// 	};
// };
export const getServerSideProps = async () => {
	// Fetch one product
	const product = await shopifyClient.product.fetchByHandle('the-blue-liquid-presi-seiko-mod-nh36-movement-dj-homage-w-sapphire-crystal-genuine-dial-presidential-bracelet');
	return {
		props: {
			product: parseShopifyResponse(product),
		},
	};
};
