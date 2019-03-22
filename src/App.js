import React, { Component, Fragment } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Switch, Route} from 'react-router-dom'
import DefaultPage from './components/DefaultPage';
import ProductList from './components/ProductList';
import Details from './components/Details';
import MyCart from './components/Cart'

import PopupModal from './components/popup_modal_product';
import Nav from './components/nav';



class App extends Component {

    render() {
        return (
          <Fragment>
                <Nav/>
            <Switch>
               <Route  exact path="/" component={ProductList}/>
               <Route path="/details" component={Details}/>
               <Route path="/myCart" component={MyCart}/>
               <Route component={DefaultPage}/>
            </Switch>
            <PopupModal/>
         </Fragment>

        );
    }
}

export default App;