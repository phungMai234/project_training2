import {GET_DATE_RANGE} from "../constants/action-types";

const initialState = {
  data: []
}
export const dateRangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATE_RANGE.SUCCESS: {
      return {...state, data: action.payload}
    }
    case GET_DATE_RANGE.ERROR: {
      return {...state, errorMessage: action.message}
    }
    default:
      return state;
  }
}