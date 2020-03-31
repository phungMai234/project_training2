import {GET_DEVICE_TYPE} from "../constants/action-types";
import {getTypes} from "../api/deviceType-api";

export const  getDeviceType = async (dispatch) => {
    const res = await getTypes();
    return dispatch({
      type: GET_DEVICE_TYPE,
      res
    })
}
