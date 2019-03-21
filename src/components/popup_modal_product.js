import React, { Component } from 'react';
import { ButtonContainer } from './Button';
import  styled from 'styled-components'
import {ProductConsumer} from './contextApi'
import { Link } from 'react-router-dom';

class PopupModal extends Component {

   render() {
      return (
         <ProductConsumer>
          {( value) =>
            {
               const { id, price, title, img } = value.modalPopupDetails;
               const {openModalPopup, closeModalPopup} = value;
               if(!openModalPopup){
                  return null
                }
                else{
                  return( 
                     <ModalPopupWrapper className="container">
                        <div className="row">
                           <div className="col-8 mx-auto col-md-6 col-lg-5 p-5 text-center text-capitalize" id="modal">
                              <h5 className="">Item added to the cart</h5>
                              <img src={img} alt="modalImage" className="img-fluid" />
                              <h4 className="my-2 text-blue">{title}</h4>
                              <h4 className=" mt-3 mb-2 text-muted">price: 
                              <span className="mr-1 text-blue">#</span>{price}</h4>
                              <Link to="/">
                                 <ButtonContainer 
                                    onClick={()=>closeModalPopup()}>
                                    continue shopping
                                 </ButtonContainer>
                              </Link>
                              <Link to="/Cart">
                                 <ButtonContainer 
                                    cartProp 
                                    onClick={()=>closeModalPopup()}>
                                    Go to cart
                                 </ButtonContainer>
                              </Link>  
                           </div>     
                        </div>
                     </ModalPopupWrapper>
                     );
               }  
            }
          } 
          </ProductConsumer> 
      );
   }
}

export default PopupModal ;

const ModalPopupWrapper = styled.div`
 background:rgb(0,0,0,0.3);
 position:fixed;
 left:0;
 right:0;
 top:0;
 bottom:0;
 display:flex;
 justify-content:center;
 align-items:center;
 #modal{
    background:var(--mainWhite);
    border-radius:0.5rem solid var(--mainDark)
 }
`;