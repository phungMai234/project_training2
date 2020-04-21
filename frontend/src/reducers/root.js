import {deviceTypeReducer} from "./deviceType";
import {rankingReducer} from "./rankingChart";
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  types: deviceTypeReducer,
  rankings: rankingReducer
})