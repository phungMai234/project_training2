import {GET_RANKING} from "../constants/action-types";
import axios from "axios";

const getRankingRequest = () => ({
  type: GET_RANKING.PENDING
})
const getRankingSuccess = (data) => ({
  type: GET_RANKING.SUCCESS,
  payload: data
})
const getRankingError = (message) => ({
  type: GET_RANKING.ERROR,
  message: message
})
export const getRanking = (query) => {
  return dispatch => {
    dispatch(getRankingRequest());
    return axios.get(`http://localhost:3001/request/ranking?startDate=${query.startDate}&endDate=${query.endDate}`)
      .then(res => dispatch(getRankingSuccess(res.data)))
      .catch(err => dispatch(getRankingError(err.message)));
  }
}