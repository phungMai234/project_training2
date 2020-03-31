import {GET_DEVICE_TYPE} from "../constants/action-types";
<<<<<<< HEAD
import {getTypes} from "../api/deviceType-api";

export const  getDeviceType = async (dispatch) => {
    const res = await getTypes();
    return dispatch({
      type: GET_DEVICE_TYPE,
      res
    })
=======

export const getDeviceType = (types) =>{
    return {
        type: GET_DEVICE_TYPE,
        types: types
    }
>>>>>>> 3192a90e76a73f76f3377cd371d1f1101668d4e5
}
