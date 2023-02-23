import { shopifyClient } from './shopify';

export const fetchProduct = (productHandle) => {
	// Fetch one product
	const product = shopifyClient.product.fetchByHandle(productHandle);
	console.log(product)

	return {
		props: {
			product: parseShopifyResponse(product),
		},
	};
}