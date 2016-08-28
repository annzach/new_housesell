import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';


export default class SellNav extends Component {

  render() {
    return(
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/sell/housesell">Sell House</Link></li>
                <li><Link to="/sell/addperson">Add Person</Link></li>
                <li><Link to="/sell/viewperson">View People</Link></li>
                <li><Link to="/sell">New Purchase</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
        {this.props.children}
        </div>
      </div>
    )
  }
}



// onSubmit={this._submit}
