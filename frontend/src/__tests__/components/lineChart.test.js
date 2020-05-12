import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import LineChart from "../../components/lineChart/lineChart";
import moment from "moment";

const mockStore = configureStore([]);

describe('Line chart Component', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      query: {
        data: {
          startDate: moment(Date.now()).format("YYYY/MM/DD"),
          endDate: moment(moment().subtract(1, 'months'))
        },
        arrayOS: ["Android", "iOS"],
        date: "day"
      },
      dataLineChart: {
        data: {
          iOS: 40,
          android: 60
        },
        isFetching: false
      }
    });
    component = renderer.create(
      <Provider store={store}>
        <LineChart/>
      </Provider>
    );
  })
  it('should render Device with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
})