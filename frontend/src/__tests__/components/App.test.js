import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import App from "../../App";
const mockStore = configureStore([]);

describe('App Component', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      types: {
        data: {
          iOS: 40,
          android: 60
        },
        isFetching: false
      },
      rankings: {
        data: [20,4,5,7,2,4,8],
        isFetching: false
      }
    });
    component = renderer.create(
      <Provider store={store}>
        <App/>
      </Provider>
    );
  })
  it('should render App with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
})