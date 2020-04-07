import {ERROR, GET_DEVICE_TYPE} from "../constants/action-types";

export const deviceTypeReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DEVICE_TYPE: {
      return {...state, iOS: action.payload.iOS, android: action.payload.android}
    }
    case ERROR:{
      console.log(action.message);
      return state;
    }
    default:
      return state;
  }
}