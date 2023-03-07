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
            modalPopupDetails: ProductDetails,
            subTotal:0,
            cartTax:0,
            cartTotal:0,

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
       product.total = price ; 
       this.setState(()=>{
         return{
             Products:tempProducts,
             cart:[...this.state.cart, product]
         }  
       },()=> {this.totalCart();
    })
        
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
    //total cart
    totalCart = () =>{
        let subTotal = 0
        this.state.cart.map( item => subTotal += item.total)
        let tempTax = subTotal * 0.001
        let Tax = parseFloat(tempTax.toFixed(2))
        let total = subTotal + Tax
        this.setState(()=>{
            return { 
                cartTotal:total, 
                subTotal:subTotal, 
                cartTax:Tax 
             }
        })
    }
    // increase product quatity
    increaseQuantity = (id) =>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find( item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
   
        this.setState(()=>{
            return{
                cart:[...tempCart]
            }
        }, ()=>{
            this.totalCart();
        })
      
    }
    // decrease product quantity
    decreaseQuantity = (id) =>{
     let tempCart = [...this.state.cart];
     const selectedProduct = tempCart.find( item => item.id === id)
     const index = tempCart.indexOf(selectedProduct)
     const product = tempCart[index];
     product.count = product.count - 1;
     if(product.count === 0){
        this.removeProduct(id);
     }else{
        product.total = product.count * product.price;

     this.setState(()=>{
         return{
             cart:[...tempCart]
         }
     }, ()=>{
         this.totalCart();
     })
     
     }
     
    }
    // clear cart
    clearCart = () => {
       this.setState(()=>{
           return{ cart:[]}
       },()=>{
        //  this help such that every time the cart is empty we should be 
        //  able to add the cart product again and also set the default value
        //  of the storeProduct  
        this.setProduct();
        this.totalCart()
          }
        )
    }
    // removed product from cart
    removeProduct = (id) =>{
      console.log("remove product function clicked")
      let tempCart = [...this.state.cart];
      let tempProduct = [...this.state.Products]
      tempCart = tempCart.filter( item => item.id !== id);
    //   get the index of the product through it id  to set some values 
    const ProductIndex = tempProduct.indexOf(this.getId(id))
    let removedProduct = tempProduct[ProductIndex];
    removedProduct.inCart=false;
    removedProduct.count=0;
    removedProduct.total=0;
    this.setState(()=>{
        return{
            cart:[...tempCart],
            Products:[...tempProduct]
        }
       }, () =>{
        this.totalCart();
     })
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
                    increaseQuantity: this.increaseQuantity,
                    decreaseQuantity:this.decreaseQuantity,
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