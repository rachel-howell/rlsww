import React, { useState, useContext, useEffect } from 'react'
import CartItem from './CartItem'
import { CartContext } from '../components/CartContext'

const CartComponent = () => {

  const { cartList, setCartList } = useContext(CartContext);
  const [ total, setTotal ] = useState(0);

  useEffect(()=>{
    cartList.map(product=>(
      setTotal(total+product.priceRange.minVariantPrice.amount)
    ))
  },[cartList])

  return (
    <div className="p-4 max-w-7xl mx-auto">
        <h1 className="text-5xl mb-20">Shopping Cart</h1>
        <div className="flex flex-row">
          <div className="border-2 border-black basis-2/3">
            {
              cartList.map(product => (
                <div className="mt-3 mb-3">
                  <CartItem product={product}/>
                </div>
              ))
            }
          </div>
          <div className="border-2 basis-1/3">
            <p>Order Total: { total }</p>
            <button className="border-2 border-black">Check Out</button>
          </div>
        </div>
    </div>
  )
}

export default CartComponent
