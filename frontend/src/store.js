import {rootReducer} from "./reducers/root";
import {createStore, applyMiddleware} from 'redux';
import {apiMiddleware} from "./middleware/api";
const initState ={
    types: {
        iOS: "50",
        android: "50"
    }
}
export const store = createStore(rootReducer,initState, applyMiddleware(apiMiddleware));
