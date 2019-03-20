import React, { Component, Fragment } from 'react';
import {ProductConsumer} from './contextApi';
import Title from './Title';
import Products from './products';

export default class ProductList extends Component {
  render() {
    return (
     <Fragment>
      <div className="container">
       <Title name="our" title="products"/>
        <div className="row"> 
            <ProductConsumer>
                {value =>{
                  return value.Products.map( product =>{
                    return <Products 
                            key={product.id} 
                            product={product}
                            />
                  })
                }} 
          </ProductConsumer>
        </div>
      </div>
     </Fragment>
    )
  }
}
