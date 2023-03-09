import React from 'react'
import Image from 'next/image'

const CartItem = ({product}) => {
  console.log(product)
  return (
    <div className="flex flex-row">
      <div>
        <Image src={product.images.edges[0].node.transformedSrc} alt="rls logo" width="250" height="250"/>
        
      </div>
      <div>
        <p>{product.title}</p>
        {/* Product Details */}
        {/* Product Quantity */}
        {/* Remove From Cart */}
      </div>

    </div>
  )
}

export default CartItem
