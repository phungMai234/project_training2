import {getDeviceType} from "../src/actions/deviceType";

import configureStore from "redux-mock-store"
import thunk from "redux-thunk";
import axios from "axios"
import MockAdapter from "axios-mock-adapter";


const middlwares = [thunk];
const mockStore = configureStore(middlwares);

const mock = new MockAdapter(axios);
const store = mockStore({types: {}});

describe("integration", () => {
  beforeEach(() => {
    store.clearActions();
  });
  it('should get device types from server', () => {
    const data = [{
      types: {
        iOS: 40,
        android: 60
      }
    }]
    expect(store.getState().types).toEqual({});

    mock.onGet('http://localhost:3001/request/device_summary').reply(200, {
      iOS: 40,
      android: 60
    })

    return store.dispatch(getDeviceType()).then(() => {
        expect(store.getState()).toEqual(data)
      });
  })
})