import {deviceTypeReducer} from "../../reducers/deviceType";
import {getTypes} from "../../actions/deviceType";
import {GET_TYPES} from "../../constants/action-types";
const initialState = {
  data: [],
  isFetching: false
}
describe("decive type reducer", () => {
  it("should get device types to empty list", () => {
    expect(deviceTypeReducer(initialState, getTypes())).toMatchSnapshot();
  })
  it('should handle unknown actions', () => {
    expect(deviceTypeReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle loading time", () => {
    expect(deviceTypeReducer(initialState, {type: GET_TYPES.PENDING})).toEqual({data:[], isFetching: true});
  })
  it('should handle error', (err="error") => {
    expect(deviceTypeReducer(initialState, {type: GET_TYPES.ERROR, message: err})).toEqual({data:[], isFetching: false, errorMessage: err});
  });
})