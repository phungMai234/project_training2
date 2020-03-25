import {GET_DEVICE_TYPE} from "../constants/action-types";

export const deviceTypeReducer = (state = [], action) => {
    switch (action.type) {
        case GET_DEVICE_TYPE:
        {
            return Object.assign({}, state, {iOS: action.types.iOS, android: action.types.android});
        }
        default:
            return state;
    }
}