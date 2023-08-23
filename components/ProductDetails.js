import React, { useState, useContext, useEffect } from 'react'
import Image from 'next/image'
import { CartContext } from './CartContext';

const ProductDetails = ({ product }) => {

  const { cartList, setCartList } = useContext(CartContext)
  // const { featuredImage, setFeaturedImage } = useState(`${product.images.edges[0].node.url}`)
  const [ message, setMessage ] = useState("");


  const addToCart = (e) => {
    setCartList([product, ...cartList])
    setMessage("Item added to cart.")
  }

  useEffect(()=>{
    const data = window.localStorage.getItem('RLSWW_CART');
    data == null ? null : setCartList(JSON.parse(data));
  },[setCartList])

  useEffect(()=>{
    window.localStorage.setItem('RLSWW_CART', JSON.stringify(cartList))
  }, [cartList])

  let descrip = product.descriptionHtml;

  return (
    <div className="flex flex-wrap sm:flex-row p-5 max-w-7xl mx-auto">

        <div className="sm:basis-1/2 p-4 flex flex-wrap sm:flex-col items-center">
          <Image src={product.images.edges[0].node.url} alt="rls logo" width="500" height="500" priority/>
          <div className="hidden sm:grid sm:grid-cols-2">
            {
              product.images.edges.slice(1,100).map((image, id)=>(
                <div key={id} className="p-2">
                  <Image key={image.node.url} src={image.node.url} alt="rls logo" width="250" height="500" />
                </div>
              ))
            }
          </div>
        </div>

        <div className="sm:right sm:basis-1/2 p-4">
          <p className="text-5xl mb-3">{product.title}</p>
          <p className="text-xl mb-2">${(Math.round(product.priceRange.minVariantPrice.amount * 100) / 100).toFixed(2)}</p>
          {/* <p>Quantity</p> */}
          <button className="border-2 bg-black w-fit text-white hover:opacity-50 duration-200 p-3 text-xl mb-3" onClick={(e)=>addToCart()}>Add to Cart</button>
          {
            message && <p className="duration-200">This item has been added to your cart.</p>
          }
          <p className="text-xl mt-3" dangerouslySetInnerHTML={{__html: descrip}}></p>
        </div>
    </div>
    
  )
}

export default ProductDetails
