import {GET_DEVICE_TYPE} from "../constants/action-types";
import {getTypes} from "../api/deviceType-api";

const fetchSucc = (data) => {
  return {
    type: GET_DEVICE_TYPE,
    res: data
  }
}
export const getDeviceType = async (dispatch) => {
    try {
      let data = await getTypes();
      dispatch(fetchSucc(data))
    } catch (error) {
      console.log(error)
    }
}
