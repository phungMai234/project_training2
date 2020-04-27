import {GET_HOUR} from "../constants/action-types";

const initialState = {
  data: [],
  isFetching: false
}
export const deviceHourReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOUR.SUCCESS: {
      return {...state, isFetching: false, data: action.payload}
    }
    case GET_HOUR.ERROR: {
      return {...state, isFetching: false, errorMessage: action.message}
    }
    case GET_HOUR.PENDING: {
      return {...state, isFetching: true}
    }
    default:
      return state;
  }
}