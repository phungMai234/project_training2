import {GET_QUERY} from "../constants/action-types";

const getQuerySuccess = (data) => ({
  type: GET_QUERY.SUCCESS,
  payload: data
})
const getQueryError = (message) => ({
  type: GET_QUERY.ERROR,
  message: message
})
export const getQuery = (query) => {
  return dispatch => {
    if (!query)
      dispatch(getQueryError("Missing something"));
    dispatch(getQuerySuccess(query))
  }
}
