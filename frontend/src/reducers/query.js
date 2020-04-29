import {GET_QUERY} from "../constants/action-types";

const initialState = {
  data: []
}
export const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUERY.SUCCESS: {
      return {...state, data: action.payload}
    }
    case GET_QUERY.ERROR: {
      return {...state, errorMessage: action.message}
    }
    default:
      return state;
  }
}