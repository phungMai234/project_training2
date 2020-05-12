import {GET_DATA_LINE_CHART} from "../constants/action-types";

const initialState = {
  data: [],
  isFetching: false
}
export const lineChartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_LINE_CHART.SUCCESS: {
      return {...state, isFetching: false, data: action.payload}
    }
    case GET_DATA_LINE_CHART.ERROR: {
      return {...state, isFetching: false, errorMessage: action.message}
    }
    case GET_DATA_LINE_CHART.PENDING: {
      return {...state, isFetching: true}
    }
    default:
      return state;
  }
}