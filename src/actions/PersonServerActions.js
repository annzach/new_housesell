import AppDispatcher from '../AppDispatcher'

const PersonServerActions ={
   receiveOnePerson(person){
    AppDispatcher.dispatch({
    type:'RECEIVE_ONE_PERSON',
    person
  })

},
 receiveAllPeople(people){
    AppDispatcher.dispatch({
    type:'RECEIVE_ALL_PEOPLE',
    people
  })
}
}

export default PersonServerActions;