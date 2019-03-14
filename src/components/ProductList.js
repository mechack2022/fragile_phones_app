import React, { Component, Fragment } from 'react';
import  Products from './products'
import Title from './Title';

export default class ProductList extends Component {
  render() {
    return (
     <Fragment>
      <div className="container">
        <div className="row">
          <Title name="our" title="products"/>
          <div className="col">
            
          </div>
        </div>
      </div>
     </Fragment>
    )
  }
}
