import React, { useState, useContext, useEffect } from 'react'
import CartItem from './CartItem'
import { CartContext } from '../components/CartContext'
import { storefront } from '../lib/storefront'

const CartComponent = () => {

  const { cartList, setCartList } = useContext(CartContext);
  //The cartList is an array of objects that is populated by the list of products stored in local browser memory.
  const { cartTotal, setCartTotal } = useContext(CartContext);
  //The total cost of all items in the cart.
  const [ cartInput, setCartInput ] = useState({});
  //The input that goes into the graphQL createCart mutation.
  const [cartItemInput, setCartItemInput] = useState([])

  const customStyle = {
    minHeight: '70vh'
  }

  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}


  useEffect(()=>{
    const data = window.localStorage.getItem('RLSWW_CART');
    data == null ? null : setCartList(JSON.parse(data));
    console.log("this is the cartList", cartList)
  },[setCartList])

  useEffect(()=>{
    //The purpose of this useEffect is to set the cartInput and calculate the total

    let items = [];
    let merchIDs = [];
    //Array of merchandise IDs

    let total = 0;
    //Total cost of cart
    let obj = {};

    let struggleArray = [];
    let cartListNoDuplicates = [...new Map(cartList.map(v => [v.id, v])).values()]
    //the above command was created by jesus christ himself. I'm truly blessed and saved. thank you
    
    cartList.map((product)=>(

      total+=Number(product.priceRange.minVariantPrice.amount),
      //This adds each product in the cartList to the total

      merchIDs.push(product.variants.edges[0].node.id)
      //Collects all of the merchIDs into an array for quantity calculation below

      )),


    merchIDs.map((id)=>{
      if(obj[id]){
        obj[id] = obj[id]+1;
      } else {
        obj[id]=1;
      }
    })
      //Calculates the quantity by ID of each product


      //Goal: take above merchID function and change it to map through an array of products, then 

      for(let k in obj){
        let newItem={
          "quantity":obj[k],
          "merchandiseId":k
        }
        items.push(newItem)
      }
      //Creates the array of items to be added to cartInput


      items.map((item)=>{
        for(let x=0; x<cartListNoDuplicates.length; x++){
          if(item.merchandiseId == cartListNoDuplicates[x].variants.edges[0].node.id) {
            let newCartItem = { product: cartListNoDuplicates[x], quantity: item.quantity };
              struggleArray.push(newCartItem)
          } else {
            console.log("don't read this!!")
          }
        }
      })

      
      //The map function above (which is admittedly not the most efficient) compares all items in the items list to all items in cartList and adds each unique one to an array of objects to be sent to the CartItem component. This will allow each item to display a quantity (instead of having duplicates in the cart).

      setCartItemInput(struggleArray);
      console.log("finally", cartItemInput)

      setCartInput({
        "cartInput": {
          "lines": items,
          "attributes": {
            "key": "key",
            "value": "value"
          }
        }
      })
      setCartTotal(total)
  },[cartList, setCartTotal])

  const cartHandler = async () => {
    const cart = await storefront(cartMutation, cartInput);
    window.open(cart.data.cartCreate.cart.checkoutUrl);
  }


  return (
    <div className="p-4 max-w-7xl mx-auto" style={customStyle}>
        <h1 className="text-6xl text-center mb-10">Shopping Bag</h1>
        <div className="flex sm:flex-row flex-wrap">
          <div className="sm:basis-2/3 flex flex-col p-5">
            {
              cartItemInput.length > 0 ? cartItemInput.map((item, id) => (
                <div className="mb-3" key={`${item.product.title}+${id}`}>
                  <CartItem key={id} product={item.product} quantity={item.quantity}/>
                  {/* {console.log(product)} */}
                </div>
              )) : <p>Your cart is currently empty.</p>
            }

          </div>
          <div className="rounded-md sm:basis-1/3 p-5 mt-0">
            <p>Order Summary</p>
            <hr className="bg-black" />
            <p className="text-3xl mb-2">Subtotal: ${ (Math.round(cartTotal * 100) / 100).toFixed(2) }</p>
            <p>Taxes and shipping calculated at checkout</p>
            <button onClick={()=>cartHandler()} className="border-2 bg-black w-fit text-white hover:opacity-50 duration-200 p-3 text-xl mt-5">Check Out</button>
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
  }
  `


export default CartComponent
