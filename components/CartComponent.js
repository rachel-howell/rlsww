import React, { useState, useContext, useEffect } from 'react'
import CartItem from './CartItem'
import { CartContext } from '../components/CartContext'
import { storefront } from '../lib/storefront'

const CartComponent = () => {

  const { cartList, setCartList } = useContext(CartContext);
  const [ cartTotal, setCartTotal ] = useState(0);
  const [ cartInput, setCartInput ] = useState({});

  const getCart = () =>{
    let items = [];
    let newItem = {};
    let total = 0;

    cartList.map((product)=>(

      total+=product.priceRange.minVariantPrice.amount,

      newItem = {
        "quantity":1,
        "merchandiseId": product.variants.edges[0].node.id
      },

      console.log("--------------The new item: ", newItem),

      items.push(newItem)

      ))

      setCartInput({
        "cartInput": {
          "lines": items,
          "attributes": {
            "key": "cart_attribute_key",
            "value": "This is a cart attribute value"
          }
        }
      })

      setCartTotal(total)

  }

  

  useEffect(()=>{
    getCart();
  },[])

  const cartHandler = async () => {
    console.log("this is the cart input", cartInput)
    const cart = await storefront(cartMutation, cartInput);
    console.log(cart);
  }


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
            <p>Order Total: ${ (Math.round(cartTotal * 100) / 100).toFixed(2) }</p>
            <button onClick={()=>cartHandler()}className="border-2 border-black">Check Out</button>
          </div>
        </div>
    </div>
  )
}

const cartMutation = `
  mutation createCart($cartInput: CartInput) {
    cartCreate(input: $cartInput) {
      cart {
        id
        createdAt
        updatedAt
        checkoutUrl
        lines(first: 10) {
          edges {
            node {
              id
              merchandise {
                ... on ProductVariant {
                  id
                }
              }
            }
          }
        }
        attributes {
          key
          value
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
          totalDutyAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }`


export default CartComponent
