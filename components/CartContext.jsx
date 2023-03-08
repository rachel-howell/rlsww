import { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [ cartList, setCartList ] = useState([]);

  return (
    <CartContext.Provider value={{
        cartList,
        setCartList
    }}>
        {props.children}
    </CartContext.Provider>
  )
}
