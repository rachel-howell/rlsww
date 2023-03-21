import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { CartContext } from './CartContext';

const CartItem = ({product}) => {

  const { cartList, setCartList } = useContext(CartContext);

  const removeFromCart = () => {
    let removed = false;
    let newCartList = [];

    for(let i=0; i<cartList.length; i++){
      if(cartList[i].id==product.id && removed==false) {
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
    <div className="flex flex-row">
      <div>
        <Image src={product.images.edges[0].node.url} alt="rls logo" width="250" height="250"/>
        
      </div>
      <div>
        <p>{product.title}</p>
        {/* Product Details */}
        {/* Product Quantity */}
        {/* Remove From Cart */}
        
      </div>
      <div>
        <HighlightOffIcon onClick={()=>removeFromCart()} />
      </div>

    </div>
  )
}

export default CartItem
