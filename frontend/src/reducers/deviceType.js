import {GET_TYPES} from "../constants/action-types";

const initialState = {
  data: [],
  isFetching: false
}
export const deviceTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TYPES.SUCCESS: {
      return {...state, isFetching: false, data: action.payload}
    }
    case GET_TYPES.ERROR: {
      return {...state, isFetching: false, errorMessage: action.message}
    }
    case GET_TYPES.PENDING: {
      return {...state, isFetching: true}
    }
    default:
      return state;
  }
}