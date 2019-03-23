
import React from 'react'
import CartItem from './cartItem';

export default function CartItemList({value}) {
   const { cart } = value ;
   console.log(cart, value)
  return (
    <div>
       {cart.map( item =>{
               return <CartItem key={item.id} item={item} value={value}  />
            })}
    </div>
  )
}
