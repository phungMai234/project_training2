import axios from "axios";
import moment from "moment";

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({
    status: 200
  })
}))
describe("ranking chart actions", () => {
  let startDate = moment(Date.now()).format("YYYY/MM/DD");
  let endDate = moment(Date.now()).format("YYYY/MM/DD");

  it("should create an action to get levels", async () => {
    const res = await axios.get(`http://localhost:3002/request/ranking?startDate=${startDate}&endDate=${endDate}`);
    expect(res.status).toEqual(200);
  })
})
