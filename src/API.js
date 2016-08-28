import axios from 'axios';
import ServerActions from './actions/ServerActions';
import PersonServerActions from './actions/PersonServerActions';

const API = {
  getAllHouses(){
    axios.get('/api/houses')
      .then(res => res.data)
      .then(ServerActions.receiveHouses)
      .catch(console.error);
  },
  createHouse(house) {
    axios.post('/api/houses', house)
      .then(res => res.data)
      .then(ServerActions.receiveOneHouse)
      .catch(console.error);
  },
  lookup(zipcode){
    axios.get(`/api/houses/lookup/${zipcode}`)
      .then(res => res.data)
      .then(ServerActions.receiveHouses)
      .catch(console.error);
  },
  editHouse(id, house){
    axios.put(`/api/houses/${id}`, house)
      .then(res => res.data)
      .then(ServerActions.receiveHouses)
      .catch(console.error);
  },
  deleteHouse(id) {
    axios.delete(`/api/houses/${id}`)
    .then(this.getAllHouses())
  },
    
  createPerson(person){
    console.log("api.create person");
    axios.post('/api/buyers', person)
         .then(res=>res.data)
         .then(PersonServerActions.receiveOnePerson)
         .catch(console.error)
  },
    getAllPeople(){
      axios.get(`/api/buyers`)
         .then(res=>res.data)
         .then(PersonServerActions.receiveAllPeople)
         .catch(console.error)

  },
  // addOwner(animal_id, owner_id){
  //   axios.put(`/api/animals/${animal_id}/addOwner/${owner_id}`)
  //     .then(this.getAllAnimals())
  // }
}

export default API;
