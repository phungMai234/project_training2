import {getDeviceType} from "../actions/deviceType";
import {BASE_URL} from "../constants/action-types";

export const apiMiddleware = ({dispatch}) => next => action =>{
    if(action.type !== 'API')
        return next(action)

    fetch(BASE_URL + action.payload.url)
        .then(res =>{
            res.json().then(data =>
            {
                return dispatch(getDeviceType(data)) // doan nay dang nghi de thay doi
            })
        })
        .catch(err =>{
            console.log(err)
        })
}