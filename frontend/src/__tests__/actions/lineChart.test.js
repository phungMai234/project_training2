import axios from "axios";
import moment from "moment";

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({
    status: 200
  })
}));

describe("line chart actions", () => {

  let startDate = moment(Date.now()).format("YYYY/MM/DD");
  let endDate = moment(moment().subtract(1, 'months'));
  let arrayOS = ["Android", "iOS", "Window", "Linux", "OS", "Unknown"];
  let typeDate = "day";

  it("should create an action to get line chart", async () => {
    const res = await axios.get(`http://localhost:3002/request/line_chart?startDate=${startDate}&endDate=${endDate}&arrayOS=${arrayOS}&date=${typeDate}`);
    expect(res.status).toEqual(200);
  })
})
