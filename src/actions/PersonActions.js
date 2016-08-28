import API from '../API';

const PersonActions = {

  getAllPeople:API.getAllPeople,
 
  createPerson(person) {
    console.log("inside person Actions create person");
    API.createPerson(person);
    console.log('person:', person)
  }
}

export default PersonActions;