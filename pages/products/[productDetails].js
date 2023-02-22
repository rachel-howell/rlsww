import * as React from 'react';
import { shopifyClient, parseShopifyResponse } from '../../lib/shopify';

export default function ProductPage({ product }) {
	// const { id, title, images, variants, handle } = product;
	// const { src: productImage } = images[0];
	// const { price } = variants[0];
    console.log(product)
	return (
        <p>test</p>
		// <Box>
		// 	{product && (
		// 		<Container maxWidth="lg">
		// 			<BreadcrumbsNavigation title={title} />
		// 			<Grid container direction="row">
		// 				<Grid item xs={6}>
		// 					<Image
		// 						src={productImage}
		// 						alt={`Picture of ${title}`}
		// 						width={500}
		// 						height={500}
		// 					/>
		// 				</Grid>
		// 				<Grid item xs={6}>
		// 					<Typography variant="h3" my={2}>
		// 						{title}
		// 					</Typography>
		// 					<Grid mt={4}>
		// 						<Typography variant="h6" component="span">
		// 							Price:{' '}
		// 						</Typography>
		// 						<Typography variant="body1" component="span">
		// 							{price}
		// 						</Typography>
		// 					</Grid>
		// 					<Grid mt={1}>
		// 						<Button variant="contained">Add to cart</Button>
		// 					</Grid>
		// 				</Grid>
		// 			</Grid>
		// 		</Container>
		// 	)}
		// </Box>
	);
}

export const getServerSideProps = async ({ params }) => {
	const { productHandle } = params;
	// Fetch one product
	const product = await shopifyClient.product.fetchByHandle(productHandle);

	return {
		// props: {
		// 	product: parseShopifyResponse(product),
		// },
		props: {
			product,
		},
	};
};