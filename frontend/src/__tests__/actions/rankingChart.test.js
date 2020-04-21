import {GET_RANKING} from "../../constants/action-types";
import axios from "axios";

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({
    payload: [20, 4, 5, 7, 2, 4, 8]
  })
}))
describe("ranking action", () => {
  it("should create an action to get ranking", async () => {
    const res = await axios.get("http://localhost:3001/request/ranking");
    const actual = {
      type: GET_RANKING.SUCCESS,
      payload: res.payload
    }
    const expected = {
      type: GET_RANKING.SUCCESS,
      payload: [20, 4, 5, 7, 2, 4, 8]
    }
    expect(actual).toEqual(expected);
  })
})
