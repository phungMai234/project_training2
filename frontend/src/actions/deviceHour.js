import {GET_HOUR} from "../constants/action-types";
import axios from "axios"

const getHourRequest = () => ({
  type: GET_HOUR.PENDING
})
const getHourSuccess = (data) => ({
  type: GET_HOUR.SUCCESS,
  payload: data
})
const getHourError = (message) => ({
  type: GET_HOUR.ERROR,
  message: message
})
export const getHour = () => {
  return dispatch => {
    dispatch(getHourRequest());
    return axios.get("http://localhost:3001/request/device_hour")
      .then(res => {
        console.log("res", res)
        return dispatch(getHourSuccess(res.data))
      })
      .catch(err => dispatch(getHourError(err.message)));
  }
}
