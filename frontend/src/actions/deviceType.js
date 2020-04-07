import {GET_DEVICE_TYPE, ERROR} from "../constants/action-types";
import axios from "axios"

export const getDeviceType = () => (
  async dispatch => {
    await axios.get("http://localhost:3001/request/device_summary")
      .then(res => dispatch({
        type: GET_DEVICE_TYPE,
        payload: res.data
      }))
      .catch(err => dispatch({
        type: ERROR,
        message: err
      }));
  }
)
