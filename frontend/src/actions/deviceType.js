import {GET_TYPES} from "../constants/action-types";
import axios from "axios"

const getTypesRequest = () => ({
  type: GET_TYPES.PENDING
})
const getTypesSuccess = (data) => ({
  type: GET_TYPES.SUCCESS,
  payload: data
})
const getTypesError = (message) => ({
  type: GET_TYPES.ERROR,
  message: message
})
export const getTypes = () => {
  return dispatch => {
    dispatch(getTypesRequest());
    return axios.get("http://localhost:3001/request/device_summary")
      .then(res => dispatch(getTypesSuccess(res.data)))
      .catch(err => dispatch(getTypesError(err.message)));
  }
}
