import React, { useState, useContext, useEffect } from 'react'
import CartItem from './CartItem'
import { CartContext } from '../components/CartContext'
import { storefront } from '../lib/storefront'

const CartComponent = () => {

  const { cartList, setCartList } = useContext(CartContext);
  const [ total, setTotal ] = useState(0);
  const [ cartInputItems, setCartInputItems ] = useState([]);
  const [ cartInput, setCartInput ] = useState({});
  const [ newItem, setNewItem ] = useState({});

  useEffect(()=>{
    cartList.map(product=>(
      setTotal(total+product.priceRange.minVariantPrice.amount),

      setNewItem({
        "quantity":1,
        "merchandiseId": product.variants.edges[0].node.id
      }),

      setCartInputItems([newItem, ...cartInputItems])
    )),

    // console.log("HEY HEY HO HO", cartInputItems)

  setCartInput({
    "cartInput": {
      "lines": [
        {
          "quantity": 1,
          "merchandiseId": "gid://shopify/ProductVariant/44752916054326"
        },
        {
          "quantity":1,
          "merchandiseId": "gid://shopify/ProductVariant/44752991158582"
        }
      ],
      "attributes": {
        "key": "cart_attribute_key",
        "value": "This is a cart attribute value"
      }
    }
  })

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
            <p>Order Total: { total }</p>
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
