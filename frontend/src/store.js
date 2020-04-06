import {rootReducer} from "./reducers/root";
import {createStore} from 'redux';
const init = {
  types:{
    iOS: 50,
    android: 50
  }
}

export const store = createStore(rootReducer, init);