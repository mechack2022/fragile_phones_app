import React, { Component } from 'react';
import {ProductConsumer} from './contextApi'

class Products extends Component {
    render() {
        return (
            <div className="container">
               <h2>love</h2>
               <ProductConsumer>
                   {value=>{
                       return <h3>{value}</h3>
                   }}
               </ProductConsumer>
            </div>
        );
    }
}

export default Products;