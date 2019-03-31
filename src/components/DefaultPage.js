import React, { Component } from 'react'

export default class DefaultPage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto text-title pt-5 text-uppercase text-center">
              <h1 className="display-3">404</h1>
              <h1>error</h1>
              <h2>page not found</h2>
              <h3>
                the requested URL
                <span className="text-danger">{this.props.location.pathname}</span>{" "}
                not found
              </h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
