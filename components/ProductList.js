import * as React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router';

export default function ProductList({ products }) {
    console.log(products)
	const router = useRouter();

	const goToProductPage = (productHandle) =>
		router.push(`/products/${productHandle}`);

	return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
     <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.edges.map((product, id) => (
            <div key={id} className="rounded-md hover:cursor-pointer" onClick={()=>goToProductPage(product.node.handle)} >
                <div key={`${id}+${product.node.handle}`} className="rounded-md h-96 relative">
                  <Image key={`${product.node.handle}+${id}`} src={product.node.images.edges[0].node.url} alt="rls logo" className="rounded-lg h-full w-full object-cover object-center group-hover:opacity-75" width="500" height="500"/>
                </div>
                <h3 key={product.node.title} className="mt-4 text-md text-gray-700">{product.node.title}</h3>
                <p key={product.node.priceRange.minVariantPrice.amount} className="mt-1 text-lg font-medium text-gray-900">${(Math.round(product.node.priceRange.minVariantPrice.amount * 100) / 100).toFixed(2)}</p>
            </div>
        ))}
      </div>
    </div>



	);
}
