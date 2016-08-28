import React,{Component} from 'react'
import PersonActions from '../actions/PersonActions'

export default class AddPerson extends Component{
 constructor(){
  super();
  this.state={
    name:'', 
    email:'',
    phoneNum:''

  }
  this.submitPerson=this.submitPerson.bind(this);

 }
 

 resetForm(){
  this.setState({
    name:'', 
    email:'',
    phoneNum:''
  })
 }

 
 submitPerson(e){
  e.preventDefault();
  console.log("Submit Person");
  let person ={
    name:this.state.name,
    email:this.state.email,
    phoneNum:this.state.phoneNum
  }
  console.log('person',person)
  PersonActions.createPerson(person);
  this.setState({'person':''})
  this.resetForm();  
 }

 render(){
  let {person} = this.state;
  return (
   <div className ="maindiv">
          <h2 className="text-center"><img width="60px"  src="http://www.2-software.net/site_images/icons/other/register.png"/></h2>
        <form  className ="formStyle" onSubmit={this.submitPerson}>

          <div className="container form-group ">
            <input type="text" placeholder="Name" value = {this.state.name} className="form-control input-lg input1"
              onChange={e=>this.setState({name:e.target.value})}/>
          </div>

          <div className="container form-group">
            <input type="text" placeholder ="Email ID" value = {this.state.email} className="form-control input-lg input2"
              onChange={e=>this.setState({email:e.target.value})}/>
          </div>

          <div className="container form-group">
            <input type="Number"  placeholder="PhoneNumber" value ={this.state.phoneNum}className="form-control input-lg input3"
             onChange={e=>this.setState({phoneNum:e.target.value})}/>
          </div>

           <div  className="container form-group text-center">
            <button id = "prsnsbtid" type="submit"  className="btn btn-primary btn-lg">Submit</button>
          </div>
          </form>
    </div>

    )
 }
}