import {rootReducer} from "./reducers/root";
import {createStore} from 'redux';

export const store = createStore(rootReducer);
