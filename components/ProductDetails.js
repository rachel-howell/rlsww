import React, { useState, useContext } from 'react'
import Image from 'next/image'
import { CartContext } from './CartContext';

const ProductDetails = ({ product }) => {

  const { quantity, setQuantity } = useState("");
  const { cartList, setCartList } = useContext(CartContext)


  const addToCart = (e) => {
    setCartList([product, ...cartList])
    console.log(cartList)
  }

  return (
    <div className="flex flex-row p-5 max-w-7xl mx-auto">
        <div className="basis-1/2 border-black border-2">
          <Image src={product.images.edges[0].node.url} alt="rls logo" width="500" height="500"/>
        </div>
        <div className="right basis-1/2 border-green-700 border-2">
          <p>{product.title}</p>
          <p>{product.priceRange.minVariantPrice.amount}</p>
          <p>Quantity</p>
          <button className="button border-2 border-black" onClick={(e)=>addToCart()}>Add to Cart</button>
          <p>{product.description}</p>
        </div>
    </div>
    
  )
}

export default ProductDetails
