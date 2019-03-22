import React, { Component } from 'react';
import {ProductStore, ProductDetails} from '../data'

const ProductContext = React.createContext();
class ProductProvider extends Component {
    constructor(props){
        super(props)
        this.state={
            Products:[],
            ProductDetails:ProductDetails,
            cart:ProductStore,
            OpenModalPopup: false,
            modalPopupDetails: ProductDetails,
            subTotal:"",
            tax:"",
            total:"",
            itemTotal:""
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

     // open modalpopoup to true 
     openModalPopup = ( id ) =>{
        // const {OpenModalPopup, modalPopupDetails} = this.state
        const modalProduct = this.getId(id);
         this.setState(() =>  {
           return { modalPopupDetails: modalProduct,
                    OpenModalPopup:true
                }
           }
         ) 
         console.log(this.state.OpenModalPopup)
     }
     // close modal popup
     closeModalPopup = () =>{
       this.setState(()=>{ 
       return{OpenModalPopup:false}})
       console.log(this.state.OpenModalPopup)
     }
    // two functions handler handling addCart and openModalpopup
    handleAddcart_openModalPopup = (id) =>{
        this.openModalPopup(id);
        this.addCart(id);
        
    }
    // increase product quatity
    increaseQuality = (id) =>{
        console.log("increasequality method")
    }
    // decrease product quality
    decreaseQuality = (id) =>{
     console.log("increasequality method")
    }
    // clear cart
    clearCart = () => {
       console.log("clear cart") 
    }
    // removed product from cart
    removeProduct = () =>{
      console.log("romove product method")   
    }
    render() {
        return (
            <ProductContext.Provider 
                value={{
                    ...this.state, 
                    handleProductDetails:this.handleProductDetails,
                    addCart:this.addCart,
                    openModalPopup:this.openModalPopup,
                    closeModalPopup:this.closeModalPopup,
                    handleAddcart_openModalPopup:this.handleAddcart_openModalPopup,
                    increaseQuality: this.increaseQuality,
                    decreaseQuality:this.decreaseQuality,
                    removeProduct: this.removeProduct,
                    clearCart :this.clearCart
                      }}  
                        >
                    {this.props.children}
            </ProductContext.Provider>     
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}