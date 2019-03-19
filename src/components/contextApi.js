import React, { Component } from 'react';
import {ProductStore, ProductDetails} from '../data'
const ProductContext = React.createContext();

class ProductProvider extends Component {
    constructor(props){
        super(props)
        this.state={
            ProductStore:ProductStore,
            ProductDetails:ProductDetails
        }
    }
    // add to cart function
    addCart =() =>{

    }
    // handle product details
    handleProductDetails = () =>{

    }
    render() {
        return (
            <ProductContext.Provider 
                value={{...this.state, 
                         handleProductDeatils:this.handleProductDetails,
                         addCart:this.addCart}}>
                            {this.props.children}
            </ProductContext.Provider>     
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}