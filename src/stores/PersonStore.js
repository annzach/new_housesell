import {EventEmitter} from 'events'
import AppDispatcher from '../AppDispatcher'

let _people=[];
class PersonStore extends EventEmitter {
  constructor(){
    super();
    AppDispatcher.register(action=>{
      switch(action.type){
        case 'RECEIVE_ONE_PERSON': var {person}=action;
                                _people.push(person);
                                this.emit('CHANGE');
                                break;
        case 'RECEIVE_ALL_PEOPLE':people =action.people 
                                  this.emit('CHANGE')
                                   break;
      }
    })
  }

  startListening(cb){
    this.on('CHANGE','cb');
  }

  stopListening(cb){
    this.removeListener('CHANGE',cb);
  }

  getAll(){
    return _people;
  }
}

export default new PersonStore();