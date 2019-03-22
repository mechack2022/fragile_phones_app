import React, { Component } from 'react';

class CartColumn extends Component {

   render() {
      return (
         <div className="container-fluid text-center d-none d-lg-block ">
         <div className="row">
            <div className="col-10 col-md-2 col-lg-2 mx-auto text-uppercase">
            product</div>
            <div className="col-10 col-md-2 col-lg-2 mx-auto text-uppercase">name of product</div>
            <div className="col-10 col-md-2 col-lg-2 mx-auto  text-uppercase">price</div>
            <div className="col-10  col-md-2 col-lg-2 mx-auto text-uppercase">quality</div>
            <div className="col-10 col-md-2 col-lg-2 mx-auto  text-uppercase">remove</div>
            <div className="col-10 col-md-2 col-lg-2 mx-auto text-uppercase">total</div>
         </div>
       </div>
         
      );
   }
}

export default CartColumn;