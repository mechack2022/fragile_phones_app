import React, { Component, Fragment } from 'react';
import Title from '../Title';
import { ProductConsumer } from '../contextApi'
import CartColumn from './cartColumn';
import CartListItem from './cartItemList';
import EmptyCart from './emptyCart';


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
                         <CartListItem value={value}/>
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