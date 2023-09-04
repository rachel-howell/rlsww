import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { CartContext } from './CartContext';
import { useRouter } from 'next/router';

const CartItem = ({product, quantity}) => {

  const { cartList, setCartList } = useContext(CartContext);

  const router = useRouter();

	const goToProductPage = (productHandle) =>
		router.push(`/products/${productHandle}`);

  const removeFromCart = () => {
    let removed = false;
    let newCartList = [];



    for(let i=0; i<cartList.length; i++){
      if(cartList.length == 1){
        window.localStorage.setItem('RLSWW_CART', JSON.stringify([]));
      } else if(cartList[i].id==product.id && removed==false) {
        removed = true;
      } else {
        newCartList.push(cartList[i])
      }
    }
    setCartList(newCartList)
    
  }

  useEffect(()=>{
    window.localStorage.setItem('RLSWW_CART', JSON.stringify(cartList))
  }, [cartList])

  return (
    <div className="flex flex-row justify-between border-8 border-red-600" style={{minHeight:'35vh'}}>

      <div className="flex flex-row p-3 border-12 border-green-300">
        <div className="border-8 border-black relative" style={{minWidth:'30vh'}}>
          <Image onClick={()=>goToProductPage(product.handle)} className="hover:cursor-pointer mr-4 rounded-md" src={product.images.edges[0].node.url} alt="watch image" fill={true}/>
        </div>

        <div>
          <p className="text-3xl mt-3 ml-5">{product.title}</p>
          <p className="text-lg mt-3 ml-5">Quantity: {quantity}</p>
          {/* Product Details */}
          {/* Product Quantity */}
          
        </div>
      </div>

      <div className="flex flex-row p-3">
        <HighlightOffIcon color="warning" fontSize="large" className="mt-3 hover:cursor-pointer mr-2" onClick={()=>removeFromCart()} />
      </div>

    </div>
  )
}

export default CartItem
