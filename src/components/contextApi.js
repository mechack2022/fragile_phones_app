import React, { Component } from 'react';
import {ProductStore, ProductDetails} from '../data'

const ProductContext = React.createContext();
class ProductProvider extends Component {
    constructor(props){
        super(props)
        this.state={
            Products:[],
            ProductDetails:ProductDetails
        }
    }
    // grab nested array of object to save the and set ot state origainal copy
    setProduct = () =>{
        let TempProducts = [];
        ProductStore.forEach( item =>{
            const singleItem = { ...item }
            TempProducts =[...TempProducts, singleItem]
        })

        this.setState({Products:TempProducts})
    }
    
    // react life cycle method
    componentDidMount(){
        this.setProduct()
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