import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import BuyerActions from '../actions/BuyerActions';


export default class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      zipcode: '94588'
    }

    this.goToSearch = this.goToSearch.bind(this);
  }

  goToSearch(e) {
    console.log('goToSearch', Date.now())
    e.preventDefault();
    BuyerActions.lookup(this.state.zipcode);
    browserHistory.push('/buy/search');
  }


  render() {
    let url = '/buy/search/' + this.state.zipcode;
    return(
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <form className="navbar-form navbar-left" onSubmit={this.goToSearch}>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="94588" value={this.state.zipcode} onChange={e=>this.setState({zipcode:e.target.value})}/>
                </div>
                <button type="submit" className="btn btn-default">Search</button>
              </form>
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Price <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">200k-300k</a></li>
                    <li><a href="#">301k-400k</a></li>
                    <li><a href="#">401k-500k</a></li>
                    <li><a href="#">501k-600k</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Bedroom<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">6</a></li>
                  </ul>
                </li>
                <li><Link to="/buy/allHouse">All</Link></li>
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
