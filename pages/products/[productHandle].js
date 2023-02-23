import * as React from 'react';
import { shopifyClient, parseShopifyResponse } from '../../lib/shopify';


export default function ProductPage({product}) {
	console.log(product)
	return (
		<h1>test</h1>
	);
}

// export const getServerSideProps = async ({params}) => {
// 	const { productHandle } = params;
// 	// Fetch one product
// 	// let product = await shopifyClient.product.fetchByHandle(params.productHandle);
// 	let product = {productHandle};
// 	return {
// 		props: {
// 			// product: parseShopifyResponse(product),
// 			product
// 		},
// 	};
// };

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: false,
    };
}

export async function getStaticProps({ productHandle }) {
    const product = await shopifyClient.product.fetchByHandle(productHandle);
    return {
        props: {
            product: parseShopifyResponse(product),
        },
    };
}

async function getProduct() {
    
}