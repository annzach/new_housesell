import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveHouses(houses) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_HOUSES',
      houses
    })
  },
  receiveOneHouse(house) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ONE_HOUSE',
      house
    })
  },
  // receiveAnimals(animals) {
  //   AppDispatcher.dispatch({
  //     type: 'RECEIVE_ANIMALS',
  //     animals
  //   })
  // },
  // receiveOneAnimal(animal) {
  //   AppDispatcher.dispatch({
  //     type: 'RECEIVE_ONE_ANIMAL',
  //     animal
  //   })
  // }
}

export default ServerActions;
