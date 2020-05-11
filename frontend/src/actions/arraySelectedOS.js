import {GET_ARRAY_SELECTED_OS} from "../constants/action-types";

const getArraySelectedOSSuccess = (data) => ({
  type: GET_ARRAY_SELECTED_OS.SUCCESS,
  payload: data
})
const getArraySelectedOSError = (message) => ({
  type: GET_ARRAY_SELECTED_OS.ERROR,
  message: message
})
export const getArraySelectedOS = (arrayOS) => {
  return dispatch => {
    if (!arrayOS) {
      dispatch(getArraySelectedOSError("Select at least OS"));
    }
    dispatch(getArraySelectedOSSuccess(arrayOS))
  }
}
