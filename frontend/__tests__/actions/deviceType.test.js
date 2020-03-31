import {getDeviceType} from "../../src/actions/deviceType";
import {GET_DEVICE_TYPE} from "../../src/constants/action-types";
import configureStore from "redux-mock-store"
import thunk from "redux-thunk";
import axios from "axios"
import MockAdapter from "axios-mock-adapter";

const middlwares = [thunk];
const mockStore = configureStore(middlwares);

const mock = new MockAdapter(axios);
const store = mockStore({});


describe("actions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  it("should create an action to get device types", () => {
    mock.onGet('/request/device_summary').reply(200, {
      iOS: 40,
      android: 60
    })

    store.dispatch(getDeviceType()).then(() => {
      let expectedActions = [{
        type: GET_DEVICE_TYPE,
        res: {
          iOS: 40,
          android: 60
        }
      }]
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})