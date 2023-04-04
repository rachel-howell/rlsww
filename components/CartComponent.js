import React, { useState, useContext, useEffect } from 'react'
import CartItem from './CartItem'
import { CartContext } from '../components/CartContext'
import { storefront } from '../lib/storefront'
import Link from 'next/link'

const CartComponent = () => {

  const { cartList, setCartList } = useContext(CartContext);
  const [ cartTotal, setCartTotal ] = useState(0);
  const [ cartInput, setCartInput ] = useState({});

  const getCart = () =>{
    let items = [];
    let newItem = {};
    let total = 0;

    cartList.map((product)=>(

      total+=Number(product.priceRange.minVariantPrice.amount),

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
    const data = window.localStorage.getItem('RLSWW_CART');
    data == null ? null : setCartList(JSON.parse(data));
  },[])

  useEffect(()=>{
    getCart();
  },[cartList])

  const cartHandler = async () => {
    console.log("this is the cart input", cartInput)
    const cart = await storefront(cartMutation, cartInput);
    console.log(cart);
    window.open(cart.data.cartCreate.cart.checkoutUrl);
  }


  return (
    <div className="p-4 max-w-7xl mx-auto">
        <h1 className="text-5xl mb-10">Shopping Cart</h1>
        <div className="flex flex-row">
          <div className="basis-2/3 flex flex-col p-5">
            {
              cartList.map(product => (
                <div className="mb-3">
                  <CartItem product={product}/>
                </div>
              ))
            }
          </div>
          <div className="border-4 h-52 rounded-md border-[#dedcdc] basis-1/3 p-5 mt-5">
            <p className="text-3xl mb-2">Subtotal: ${ (Math.round(cartTotal * 100) / 100).toFixed(2) }</p>
            <p>Taxes and shipping calculated at checkout</p>
            <button onClick={()=>cartHandler()} className="border-2 bg-black w-fit text-white hover:opacity-50 duration-200 p-3 text-xl mb-3 mt-5">Check Out</button>
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
