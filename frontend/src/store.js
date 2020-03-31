import {rootReducer} from "./reducers/root";
<<<<<<< HEAD
import {createStore} from 'redux';

export const store = createStore(rootReducer);
=======
import {createStore, applyMiddleware} from 'redux';
import {apiMiddleware} from "./middleware/api";
const initState ={
    types: {
        iOS: "50",
        android: "50"
    }
}
export const store = createStore(rootReducer,initState, applyMiddleware(apiMiddleware));
>>>>>>> 3192a90e76a73f76f3377cd371d1f1101668d4e5
