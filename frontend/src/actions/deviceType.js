import {GET_DEVICE_TYPE} from "../constants/action-types";

export const getDeviceType = (types) =>{
    return {
        type: GET_DEVICE_TYPE,
        types: types
    }
}
