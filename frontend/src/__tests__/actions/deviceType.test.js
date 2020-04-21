import {GET_TYPES} from "../../constants/action-types";
import axios from "axios";

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({
    payload: {
      iOS: 40,
      android: 60
    }
  })
}))
describe("device types actions", ()=>{
  it("should create an action to get device types", async () => {
    const res = await axios.get("http://localhost:3001/request/device_summary");
    const actual = {
      type: GET_TYPES.SUCCESS,
      payload: res.payload
    }
    const expected = {
      type: GET_TYPES.SUCCESS,
      payload: {
        iOS: 40,
        android: 60
      }
    }
    expect(actual).toEqual(expected);
  })
})
