import {deviceTypeReducer} from "./deviceType";
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
    types: deviceTypeReducer
})