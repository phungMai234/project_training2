import {GET_DEVICE_TYPE} from "../../constants/action-types";
import axios from "axios";

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({
    payload: {
      iOS: 40,
      android: 60
    }
  })
}))
describe("actions", ()=>{
  it("should create an action to get device types", async () => {
    const res = await axios.get("http://localhost:3001/request/device_summary");
    const actual = {
      type: GET_DEVICE_TYPE,
      payload: res.payload
    }
    const expected = {
      type: GET_DEVICE_TYPE,
      payload: {
        iOS: 40,
        android: 60
      }
    }
    expect(actual).toEqual(expected);
  })
})
