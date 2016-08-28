import React, { Component } from 'react';
import HouseStore from '../stores/HouseStore';
import ListHouse from './ListHouse';
import BuyerActions from '../actions/BuyerActions';


export default class BuyPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      houses: HouseStore.getAll()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    BuyerActions.getAllHouses();
    HouseStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    HouseStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      houses: HouseStore.getAll()
    });
  }

  render() {
    let {houses} = this.state;
    const ListHouses = houses.map(house => {
      return (
        <ListHouse key={house._id} {...house} />
      )
    })

    return (
      <div>
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Picture</th>
                <th>Address</th>
                <th>Zipcode</th>
                <th>Sqft</th>
                <th>Bedroom</th>
                <th>Bathroom</th>
                <th>Price</th>
                <th>Order</th>
              </tr>
            </thead>
            <tbody>
              {ListHouses}
            </tbody>
          </table>
      </div>
    </div>
    )
  }
}
