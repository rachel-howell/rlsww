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
    <div className="border-4 border-red-500 grid lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
      {products.edges.map((product) => (
          <div className="border-2 rounded-md hover:cursor-pointer" onClick={()=>goToProductPage(product.node.handle)} >
              <div className="rounded-md h-96 border-4 border-purple-800 relative">
                <Image src={product.node.images.edges[0].node.url} alt="rls logo" fill className="rounded-md"/>
              </div>
              <h3 className="mt-4 text-md text-gray-700">{product.node.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${(Math.round(product.node.priceRange.minVariantPrice.amount * 100) / 100).toFixed(2)}</p>
          </div>
      ))}
    </div>
	);
}
