import {GET_DATE_RANGE} from "../constants/action-types";

const getDateRangeSuccess = (data) => ({
  type: GET_DATE_RANGE.SUCCESS,
  payload: data
})
const getDateRangeError = (message) => ({
  type: GET_DATE_RANGE.ERROR,
  message: message
})
export const getDateRange = (dateRange) => {
  return dispatch => {
    if (!dateRange.startDate || !dateRange.endDate) {
      dispatch(getDateRangeError("Missing date range"));
    }
    dispatch(getDateRangeSuccess(dateRange))
  }
}
