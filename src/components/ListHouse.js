import React, { Component } from 'react';
import BuyerActions from '../actions/BuyerActions'

export default class ListHouse extends Component {
  constructor(props){
    super(props);

    this.state = {
      editing:null,
      editPicture:'',
      editAddress:'',
      editSqft:'',
      editZipcode:'',
      editBeds:'',
      editBaths:'',
      editPrice:''
    }

    this.orderHouse = this.orderHouse.bind(this);
    this.editHouse=this.editHouse.bind(this);
    this.saveMe=this.saveMe.bind(this);
    this.deleteHouse=this.deleteHouse.bind(this);
  }

  editHouse(id){
    this.setState({
      editing:this.props._id,
      editPicture:this.props.picture,
      editAddress:this.props.address,
      editSqft:this.props.sqft,
      editZipcode:this.props.zipcode,
      editBeds:this.props.beds,
      editBaths:this.props.baths,
      editPrice:this.props.price
    })
  }

  saveMe(e){
    let new_id = this.props._id;
    let new_picture =this.state.editPicture;
    let new_address =this.state.editAddress;
    let new_baths=this.state.editBaths
    let new_sqft =this.state.editSqft;
    let new_zipcode =this.state.editZipcode;
    let new_beds =this.state.editBeds;
    let new_price = this.state.editPrice;
    let new_obj = {picture:new_picture  ,address:new_address,
                   baths:new_baths,sqft:new_sqft,zipcode:new_zipcode,beds:new_beds,
                   price:new_price }
   BuyerActions.editHouse(new_id,new_obj);
   this.setState({editing:null});
  }

  deleteHouse(id){

    BuyerActions.deleteHouse(id);
  }

  orderHouse(id){

  }
  render() {
    let { _id, address, sqft, beds, baths, picture, price, zipcode }  = this.props;
    if(this.state.editing){
      return (
        <tr>
          <td><input type="text" value = {this.state.editPicture} onChange ={e=>this.setState({editPicture:e.target.value})}/></td>
          <td><input type="text" value = {this.state.editAddress} onChange ={e=>this.setState({editAddress:e.target.value})}/></td>
          <td><input type="text" value = {this.state.editZipcode} onChange ={e=>this.setState({editZipcode:e.target.value})}/></td>
          <td><input type="number" value = {this.state.editSqft} onChange ={e=>this.setState({editSqft:e.target.value})}/></td>
          <td><input type="number" value = {this.state.editBeds} onChange ={e=>this.setState({editBeds:e.target.value})}/></td>
          <td><input type="number" value = {this.state.editBaths}onChange ={e=>this.setState({editBaths:e.target.value})} /></td>
          <td><input type="text" value = {this.state.editPrice} onChange ={e=>this.setState({editPrice:e.target.value})}/></td>
          <td>
            <button id ={_id} className='btn btn-default btn-xs' onClick={this.saveMe}>
              <span className='glyphicon glyphicon-ok'></span>
            </button>
            <button id ={_id} className='btn btn-default btn-xs'>
              <span className='glyphicon glyphicon-remove'></span>
            </button>
         </td>
        </tr>
        )
      }else{
        return(
          <tr className='trFont'>
            <td><img src={picture} width="300 px" alt="No Image"/></td>
            <td>{address}</td>
            <td>{zipcode}</td>
            <td>{sqft}</td>
            <td>{beds}</td>
            <td>{baths}</td>
            <td>${price}</td>
            <td>
              <button className="btn btn-danger btn-xs" onClick={() => this.orderHouse(_id)}>
                <span className="glyphicon glyphicon-tag"></span>
              </button>
              <button id = {_id} className="btn btn-primary btn-xs" onClick={()=>this.editHouse(_id)}>
                <span className="glyphicon glyphicon-pencil"></span>
              </button>
              <button id = {_id} className="btn btn-danger btn-xs" onClick={()=>this.deleteHouse(_id)}>
                <span className="glyphicon glyphicon-remove"></span>
              </button>
            </td>
          </tr>
        )
      }
  }
}
