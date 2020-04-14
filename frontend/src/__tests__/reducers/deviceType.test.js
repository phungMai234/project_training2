import {deviceTypeReducer} from "../../reducers/deviceType";
import {getDeviceType} from "../../actions/deviceType";

describe("decive type reducer", () => {
  const initialState = []
  it("should get device types to empty list", () => {
    expect(deviceTypeReducer(initialState, getDeviceType())).toMatchSnapshot();
  })
  it('should handle unknown actions', () => {
    expect(deviceTypeReducer(initialState, { type: 'FAKE' })).toBe(initialState);
  });
  it('should handle error', () => {
    expect(deviceTypeReducer(initialState, { type: 'ERROR', message:"error" })).toBe(initialState);
  });
})