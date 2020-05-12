import {GET_DATA_LINE_CHART} from "../constants/action-types";
import axios from "axios"

const getDataLineChartRequest = () => ({
  type: GET_DATA_LINE_CHART.PENDING
})
const getDataLineChartSuccess = (data) => ({
  type: GET_DATA_LINE_CHART.SUCCESS,
  payload: data
})
const getDataLineChartError = (message) => ({
  type: GET_DATA_LINE_CHART.ERROR,
  message: message
})
export const getDataLineChart = (dateRange, arrayOS, typeDate) => {
  return dispatch => {
    dispatch(getDataLineChartRequest());
    return axios.get(`http://localhost:3002/request/line_chart?startDate=${dateRange.startDate}&endDate=${dateRange.endDate}&arrayOS=${arrayOS}&date=${typeDate}`)
      .then(res => {
        dispatch(getDataLineChartSuccess(res.data))
      })
      .catch(err => {
        dispatch(getDataLineChartError(err.message))
      });
  }
}
