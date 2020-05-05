import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import DeviceType from "../../components/deviceType/deviceType";

const mockStore = configureStore([]);

describe('Device Component', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      query: {
        data: {
          startDate: "2019/04/29",
          endDate: "2019/04/29"
        }
      },
      types: {
        data: {
          iOS: 40,
          android: 60
        },
        isFetching: false
      }
    });
    component = renderer.create(
      <Provider store={store}>
        <DeviceType/>
      </Provider>
    );
  })
  it('should render Device with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
})