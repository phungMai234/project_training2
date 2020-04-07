import {deviceTypeReducer} from "../../src/reducers/deviceType";
import {getDeviceType} from "../../src/actions/deviceType";

describe("decive type reducer", () => {
  const initialState = []
  it("should get device types to empty list", () => {
    let data = {
      iOS: 40,
      android: 60
    }
    expect(deviceTypeReducer(initialState, getDeviceType(data))).toMatchSnapshot();
  })
  it('should handle unknown actions', () => {
    expect(deviceTypeReducer(initialState, { type: 'FAKE' })).toBe(initialState);
  });
  it('should handle error', () => {
    expect(deviceTypeReducer(initialState, { type: 'ERROR', message:"error" })).toBe(initialState);
  });
})