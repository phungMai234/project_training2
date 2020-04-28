import {getHour} from "../../actions/deviceHour";
import {deviceHourReducer} from "../../reducers/deviceHour";
import {GET_HOUR} from "../../constants/action-types";

const initialState = {
  data: [],
  isFetching: false
}
describe("device types reducer", () => {
  it("should get device types to empty list", () => {
    expect(deviceHourReducer(initialState, getHour())).toMatchSnapshot();
  })
  it('should handle unknown actions', () => {
    expect(deviceHourReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle loading time", () => {
    expect(deviceHourReducer(initialState, {type: GET_HOUR.PENDING})).toEqual({data: [], isFetching: true});
  })
  it('should handle error', (err = "error") => {
    expect(deviceHourReducer(initialState, {type: GET_HOUR.ERROR, message: err})).toEqual({
      data: [],
      isFetching: false,
      errorMessage: err
    });
  });
})