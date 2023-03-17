import * as React from 'react';
import Image from 'next/image'
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';

export default function ProductList({ products }) {
    console.log(products)
	const router = useRouter();

	const goToProductPage = (productHandle) =>
		router.push(`/products/${productHandle}`);

	return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.edges.map((product) => (
                <div className="group" onClick={()=>goToProductPage(product.node.handle)} >
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <Image src={product.node.images.edges[0].node.url} alt="rls logo" width="200" height="300" className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">{product.node.title}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">{(Math.round(product.node.priceRange.minVariantPrice.amount * 100) / 100).toFixed(2)}</p>
                </div>
            ))}
        </div>
        </div>
    </div>  
	);
}
