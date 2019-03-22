import React, { Component } from 'react';
import CartItem from './cartItem';

class CartListItem extends Component {

   render() {
      return (
         <div>
            <h2>cart item list component</h2>
            <CartItem/>
         </div>
      );
   }
}

export default CartListItem;