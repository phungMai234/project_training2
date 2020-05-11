import {GET_ARRAY_SELECTED_OS} from "../constants/action-types";

const initialState = {
  data: []
}
export const arraySelectedOSReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARRAY_SELECTED_OS.SUCCESS: {
      return {...state, data: action.payload}
    }
    case GET_ARRAY_SELECTED_OS.ERROR: {
      return {...state, errorMessage: action.message}
    }
    default:
      return state;
  }
}