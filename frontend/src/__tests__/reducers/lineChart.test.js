import {lineChartReducer} from "../../reducers/lineChart";
import {getDataLineChart} from "../../actions/lineChart";
import {GET_DATA_LINE_CHART} from "../../constants/action-types";

const initialState = {
  data: [],
  isFetching: false
}
describe("line chart reducer", () => {
  it("should get device types to empty list", () => {
    expect(lineChartReducer(initialState, getDataLineChart())).toMatchSnapshot();
  })
  it('should handle unknown actions', () => {
    expect(lineChartReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle loading time", () => {
    expect(lineChartReducer(initialState, {type: GET_DATA_LINE_CHART.PENDING})).toEqual({data: [], isFetching: true});
  })
  it('should handle error', (err = "error") => {
    expect(lineChartReducer(initialState, {type: GET_DATA_LINE_CHART.ERROR, message: err})).toEqual({
      data: [],
      isFetching: false,
      errorMessage: err
    });
  });
})