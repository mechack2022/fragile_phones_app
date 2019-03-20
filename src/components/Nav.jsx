import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { ButtonContainer, NavWrapper } from './Button';
import {ProductConsumer} from './contextApi';

export default class Nav extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
            <i className="fas fa-home"/>
        </Link>
        <ul className="navbar-nav align-items-center ">
            <Link to="/">
                <li className="nav-link ml-5">Products</li>
            </Link>    
        </ul>
        <Link to="/cart" className="ml-auto">
            <ButtonContainer>
             <i className="fas fa-cart-plus"/>
             <span className="mx-2">my cart</span>
            </ButtonContainer>  
        </Link>
      </NavWrapper>
    )
  }
}


