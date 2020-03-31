import {deviceTypeReducer} from "../../src/reducers/deviceType";
import {GET_DEVICE_TYPE} from "../../src/constants/action-types";

describe("decive type reducer", () => {

  it("should get device type to reducer", () => {
    const initState = [];
    const action = {type: GET_DEVICE_TYPE, res: {iOS: 40, android: 60}}
    const actual = deviceTypeReducer(initState, action)

    const expectedState = [{
      iOS: 40,
      android: 60
    }]
    expect(expectedState).toEqual(actual);

  })
})