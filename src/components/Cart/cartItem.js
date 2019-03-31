import React from 'react'
import styled from 'styled-components'
export default function CartItem({value, item}){
  const {id, price, img, title, count, subtotal, itemTotal} = item;
  const {clearCart, removeProduct, decreaseQuantity,increaseQuantity} = value
  return (
      <div className="row my-2 text-capitailze text-center ">
        <div className="col-10 col-md-2 col-lg-2 mx-auto">
             <img src={img} className="img-fluid" 
               alt="productImage" style={{width:"5rem",height:"5rem"}} 
               />
        </div>
        <div className="col-10 my-2 col-md-2 col-lg-2 mx-auto">
           <span className="d-lg-none">Product: </span>  
           {title}
        </div>
        <div className="col-10 col-md-2 my-2 col-lg-2 mx-auto">
           <span className="d-lg-none">Price: </span>  
           {price}
        </div>
        <div className="col-10 col-md-2 col-lg-2 mx-auto">
           <div className="d-flex my-2 justify-content-center">
             <span className="btn btnIDC mx-1 
               text-center" onClick={()=> decreaseQuantity(id)}>-</span>
             <span className="btn btnIDC mx-1 text-center">{count}</span>
             <span className="btn btnIDC mx-1 
             text-center" onClick={()=>increaseQuantity(id)}>+</span>
           </div>
        </div>
        <div className="col-10 col-md-2 my-2 col-lg-2 mx-auto">
           <div className="cartDelIcon" onClick={()=>removeProduct(id)}>
           <i className="fas fa-trash"></i></div>
        </div>
        <div className="col-10 col-md-2 my-2 col-lg-2 mx-auto">
          <strong>Item total : # {price}</strong>
        </div>
       </div>
  )
}

