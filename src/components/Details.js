import React, { Component } from 'react';
import { ButtonContainer } from './Button';
import {ProductConsumer} from './contextApi'
import { Link } from 'react-router-dom';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
      {value =>{ 
        const { id, title, price, inCart, company, img, info } = value.ProductDetails 
         return ( 
          <div className="container main-white py-5">
           {/* product title Details */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6">
             <div className="text-blue text-slanted 
              text-title text-center my-5"><h1>{title}</h1></div>
            </div>   
          </div>
          {/*end of product title Details */}
          <div className="row">
            <div className="col-10 col-md-6 my-3 mx-auto">
              <img src={img} className="img-fluid" alt="detailsImage" />
            </div>
            {/* end of image col */}
            <div className="col-10 col-md-6 my-3 mx-auto text-capitalize">
              <h2>model:{title}</h2>
              <h3 className="text-title text-capitalize">made by:{company}</h3>
              <h4 className="text-muted text-title mt-3 mb-2">price: 
              <span className="mr-1 text-blue">#</span>{price}</h4>
              <h5>some info about the product:</h5>
              <p className="text-muted lead">{info}</p>
              {/* end of product text details column */}
                  {/* buttons */}
              <div>
                <Link to="/">
                  <ButtonContainer 
                    className="mr-2"
                    disabled={inCart?true:false}>
                    Back to Product</ButtonContainer>
                </Link>
                <ButtonContainer 
                 cartProp 
                 onClick={()=> value.addCart(id)}>
                 {inCart?"inCart":"Add to Cart"}
                </ButtonContainer>
              </div>
              {/* end of buttons */}
            </div>  
          </div>
        </div>) 
        }
      }
      </ProductConsumer>
    )
  }
}
