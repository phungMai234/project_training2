import axios from "axios";

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({
    status:200
  })
}))
describe("device types actions", ()=>{
  it("should create an action to get hour", async () => {
    const res = await axios.get("http://localhost:3001/request/device_hour");
    expect(res.status).toEqual(200);
  })
})
