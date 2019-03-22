import React, { Component , Fragment} from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from './contextApi'


class Products extends Component {

    render() {
        const {id, title, price, img, inCart} = this.props.product;
        return (
           <Fragment>
                <ProductWrapper className="col-9 col-md-6 col-lg-3 mx-auto my-3">
                    <div className="card">
                        <ProductConsumer>
                          {value=>(
                            <div className="img-container p-5" 
                                onClick={()=>value.handleProductDetails(id)}> 
                                <Link to="/details">
                                    <img src={img} height="100%" width="100%"
                                        alt="product"
                                        className="card-image-top"
                                        />
                                </Link> 
                                {/* ternary button of incart and add to cart */}
                                <button className="card-btn" 
                                    disabled={inCart? true: false}
                                    onClick={()=>
                                         value.handleAddcart_openModalPopup(id)
                                        } 
                                    >
                                        {inCart? (<p className="mb-0 text-capitalize" disabled>{" "}in cart</p>):
                                        (<p className="mb-0 text-capitalize p-2"><i className="fas fa-cart-plus"/> </p>)} 
                                </button> 
                            </div>
                          )}
                        </ProductConsumer>
                        {/* card image footer */}
                        <div className="card-footer d-flex  justify-content-between">
                                <p className="align-self-center mb-0">{title}</p>
                                <h5 className="text-blue font-italic mb-0"><span>#</span>{price}</h5>
                        </div> 
                        </div> {/* end of card div */}
                </ProductWrapper>
            </Fragment>
            );
    }
}

export default Products;

Products.propTypes ={
    product:PropTypes.shape({
        id:PropTypes.number,
        title:PropTypes.string,
        price:PropTypes.number,
        img:PropTypes.string,
        inCart:PropTypes.bool  
    }).isRequired
}

const ProductWrapper =  styled.div`
    .card{
        border-color:transparent;
        transition:all 1s linear;
    }
    .card-footer{
        border-top:transparent;
        background-color:transparent;
    }
    &:hover{
        .card{
            border-color: 0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.2)
        }
        .card-footer{
            background:rgba(247,247,247)
        }
    }
    .img-container{
        position:relative;
        overflow:hidden
    }
    .card-image-top{
        transition:all 1s linear;
        
    }
    .img-container:hover .card-image-top{
        transform:scale(1.2)
    }
    .card-btn{
        position:absolute;
        bottom:0;
        right:0;
        background:var(--lightBlue);
        padding: 0.4rem 0.2rem;
        font-size:1.4rem;
        border-radius: 0.5rem 0 0 0;
        color:var(--mainWhite);
        transition:all 1s linear;
        transform:translate(100%, 100%)

    }
    .img-container:hover .card-btn{
        transform:translate(0, 0)
        
    }
    .card-btn:hover{
        color:var(--mainBlue);
        cursor: pointer;
    }
`;