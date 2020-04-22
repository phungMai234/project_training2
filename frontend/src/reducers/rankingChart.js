import {GET_RANKING} from "../constants/action-types";

const initialState = {
  data: [],
  isFetching: false
}
export const rankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RANKING.SUCCESS: {
      return {...state, isFetching: false, data: action.payload}
    }
    case GET_RANKING.ERROR: {
      return {...state, isFetching: false, errorMessage: action.message}
    }
    case GET_RANKING.PENDING: {
      return {...state, isFetching: true}
    }
    default:
      return state;
  }
}