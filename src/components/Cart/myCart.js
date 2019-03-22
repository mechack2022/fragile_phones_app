import React, { Component, Fragment } from 'react';
import Title from '../Title';
import { ProductConsumer } from '../contextApi'
import CartColumn from './cartColumn';
import EmptyCart from '../emptyCart';
import CartListItem from './cartItemList';


class MyCart extends Component {

   render() {
      return (
            <Fragment>
             <ProductConsumer>
              {value => 
                {const {cart } = value
                  if(cart.length > 0){
                     return(
                        <Fragment>
                         <Title name="Your" title="Cart"/>
                         <CartColumn/>
                         <CartItem/>
                         <CartListItem/>
                        </Fragment>
                     )
                  }
                  else {
                     return (
                        <EmptyCart/>
                       )
                    }
                  }   
                }    
              </ProductConsumer>
            </Fragment>     
      );
   }
}

export default MyCart;