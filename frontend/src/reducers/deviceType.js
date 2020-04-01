import {GET_DEVICE_TYPE} from "../constants/action-types";

export const deviceTypeReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DEVICE_TYPE: {
      return {...state, iOS: action.res.iOS, android: action.res.android}
    }
    default:
      return state;
  }

}