import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import DeviceType from "../../components/deviceType/deviceType";

const mockStore = configureStore([]);

describe('Device React-Redux Component', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      types: {
        iOS: 40,
        android: 60
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