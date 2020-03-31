import {GET_DEVICE_TYPE} from "../constants/action-types";

export const deviceTypeReducer = (state = [], action) => {
<<<<<<< HEAD

  switch (action.type) {
    case GET_DEVICE_TYPE: {
      return {...state, iOS: action.res.iOS, android: action.res.android}
    }
    default:
      return state;
  }
=======
    switch (action.type) {
        case GET_DEVICE_TYPE:
        {
            return Object.assign({}, state, {iOS: action.types.iOS, android: action.types.android});
        }
        default:
            return state;
    }
>>>>>>> 3192a90e76a73f76f3377cd371d1f1101668d4e5
}