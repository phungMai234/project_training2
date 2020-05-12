import axios from "axios";
import moment from "moment";

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({
    status: 200
  })
}))
describe("device hour actions", () => {

  let startDate = moment(Date.now()).format("YYYY/MM/DD");
  let endDate = moment(moment().subtract(1, 'months'));

  it("should create an action to get hour", async () => {
    const res = await axios.get(`http://localhost:3002/request/device_hour?startDate=${startDate}&endDate=${endDate}`);
    expect(res.status).toEqual(200);
  })
})
