import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import Image from 'next/image'
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ProductsList({ products }) {
    console.log(products)
	const router = useRouter();

	const goToProductPage = (productHandle) =>
		router.push(`/products/${productHandle}`);

	return (
		<Box>
            {products.map((product)=> 
                <ImageListItem
                style={{ cursor: 'pointer' }}
                onClick={() => goToProductPage(product.handle)}
                >
                <Image src={product.images[0].src} alt="rls logo" width='206' height='275'/>
                <ImageListItemBar
                    title={product.title}
                    // subtitle={<span>Price: {product.variants[0].price.amount}</span>}
                    subtitle={<span>Handle: {product.handle}</span>}
                    position="below"
                />
                </ImageListItem>
            )}
		</Box>
	);
}