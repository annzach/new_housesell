import React, {Component} from 'react'
import PersonStore from '../stores/PersonStore'
import PersonActions from '../actions/PersonActions'


export default class ViewPerson extends Component{
  constructor(){
    super();
    this.state = {
    // people:PersonStore.getAll();
    }
    this._onChange=this._onChange.bind(this);
  }

   componentDidMount(){
    PersonActions.getAllPeople();
    PersonStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    PersonStore.stopListening(this._onChange);
  }


  _onChange() {
    this.setState({
      people: PersonStore.getAll()
    });
  }

  render(){
    return(
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>PhoneNumber</th>
          </tr>
        </thead>

        <tbody>
          
        </tbody>
      </table>
      )
  }
}