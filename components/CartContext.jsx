import { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [ cartList, setCartList ] = useState([]);
    const [ cartTotal, setCartTotal ] = useState(0);

  return (
    <CartContext.Provider value={{
        cartList,
        setCartList,
        cartTotal,
        setCartTotal
    }}>
        {props.children}
    </CartContext.Provider>
  )
}
