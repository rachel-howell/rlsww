import React from 'react'
import Image from 'next/image'

const ProductDetails = ({ product }) => {
  console.log(product)
  return (
    <div className="flex flex-row p-5 w-11/12 mx-auto">
        <div className="basis-1/2 border-black border-2">
          <Image src={product.images.edges[0].node.transformedSrc} alt="rls logo" width="500" height="500"/>
        </div>
        <div className="right basis-1/2 border-green-700 border-2">
          <p>{product.title}</p>
          <p>{product.priceRange.minVariantPrice.amount}</p>
          <p>Quantity</p>
          <button>Add to Cart</button>
        </div>
    </div>
    
  )
}

export default ProductDetails
