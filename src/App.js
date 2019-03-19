import React, { Component, Fragment } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/Nav';
import {Switch, Route} from 'react-router-dom'
import DefaultPage from './components/DefaultPage';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart'


class App extends Component {

    render() {
        return (
          <Fragment>
            <Nav/>
            <Switch>
               <Route  exact path="/" component={ProductList}/>
               <Route path="/details" component={Details}/>
               <Route path="/cart" component={Cart}/>
               <Route component={DefaultPage}/>
            </Switch>
         </Fragment>

        );
    }
}

export default App;