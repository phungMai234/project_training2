import {deviceTypeReducer} from "./deviceType";
import {rankingReducer} from "./rankingChart";
import {deviceHourReducer} from "./deviceHour";
import {queryReducer} from "./query";
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  types: deviceTypeReducer,
  rankings: rankingReducer,
  hour: deviceHourReducer,
  query: queryReducer
})