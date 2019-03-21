import React, { Component } from 'react';
import {ProductStore, ProductDetails} from '../data'

const ProductContext = React.createContext();
class ProductProvider extends Component {
    constructor(props){
        super(props)
        this.state={
            Products:[],
            ProductDetails:ProductDetails,
            cart:[],
            OpenModalPopup: false,
            modalPopupDetails: ProductDetails
        }
    }
     // open modalpopoup to true 
     openModalPopup = ( id ) =>{
        const modalProduct = this.getId(id);
         this.setState(() =>  {
           return { modalPopupDetails: modalProduct,
                    OpenModalPopup:true}
          }
         ) 
     }
     // close modal popup
     closeModalPopup = () =>{
       this.setState(()=>{ 
       return{OpenModalPopup:false}})
     }

    // grab nested array of object to save the and set ot state origainal copy
    setProduct = () =>{
        let TempProducts = [];
        ProductStore.forEach( item =>{
            const singleItem = { ...item }
            TempProducts =[...TempProducts, singleItem]
        })
        this.setState({Products:TempProducts})
    };
    // life cycle method
    componentDidMount(){
        this.setProduct();
    }
    
    
    // function that get id form product
    getId = (id) =>{
       const product = this.state.Products.find( item =>
        item.id === id) 
        return product;
    }
    // add to cart function
    addCart =(id) =>{
      const tempProducts =[...this.state.Products];
      const productIndex= tempProducts.indexOf(this.getId(id));
       const product = tempProducts[productIndex];
       product.inCart = true;
       product.count = 1;
       const price= product.price;
       product.price = price ;
       this.setState(()=>{
         return{
             Products:tempProducts,
             cart:[...this.state.cart, product]
         }  
       },()=>console.log(this.state))
    }
    
    // handle product details and set 
    //the current id to details component
    handleProductDetails = (id) =>{
        const product = this.getId(id);
        this.setState(()=>{
            return {ProductDetails:product}
         } )
    }
    render() {
        return (
            <ProductContext.Provider 
                value={{
                    ...this.state, 
                    handleProductDetails:this.handleProductDetails,
                    addCart:this.addCart,
                    openModalPopup:this.openModalPopup,
                    closeModalPopup:this.closeModalPopup  }}  
                        >
                    {this.props.children}
            </ProductContext.Provider>     
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}