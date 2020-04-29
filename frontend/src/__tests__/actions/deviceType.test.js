import axios from "axios";
import moment from "moment";

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({
    status: 200
  })
}))
describe("device types actions", () => {
  let startDate = moment(Date.now()).format("YYYY/MM/DD");
  let endDate = moment(Date.now()).format("YYYY/MM/DD");

  it("should create an action to get types", async () => {
    const res = await axios.get(`http://localhost:3001/request/device_summary?startDate=${startDate}&endDate=${endDate}`);
    expect(res.status).toEqual(200);
  })
})
