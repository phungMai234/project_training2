import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import DeviceHour from "../../components/deviceHour/deviceHour";

const mockStore = configureStore([]);

describe('Device hour Component', () => {
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
      hour: {
        data: [{
          "name": "Monday",
          "data": [{"x": "0:00", "y": 4}, {"x": "1:00", "y": 34}, {"x": "2:00", "y": 1}, {
            "x": "3:00",
            "y": 0
          }, {"x": "4:00", "y": 13}, {"x": "5:00", "y": 15}, {"x": "6:00", "y": 13}, {
            "x": "7:00",
            "y": 13
          }, {"x": "8:00", "y": 14}, {"x": "9:00", "y": 21}, {"x": "10:00", "y": 29}, {
            "x": "11:00",
            "y": 4
          }, {"x": "12:00", "y": 16}, {"x": "13:00", "y": 5}, {"x": "14:00", "y": 11}, {
            "x": "15:00",
            "y": 9
          }, {"x": "16:00", "y": 20}, {"x": "17:00", "y": 16}, {"x": "18:00", "y": 17}, {
            "x": "19:00",
            "y": 42
          }, {"x": "20:00", "y": 1}, {"x": "21:00", "y": 14}, {"x": "22:00", "y": 10}, {"x": "23:00", "y": 4}]
        }, {
          "name": "Tuesday",
          "data": [{"x": "0:00", "y": 23}, {"x": "1:00", "y": 12}, {"x": "2:00", "y": 26}, {
            "x": "3:00",
            "y": 20
          }, {"x": "4:00", "y": 35}, {"x": "5:00", "y": 5}, {"x": "6:00", "y": 6}, {"x": "7:00", "y": 15}, {
            "x": "8:00",
            "y": 17
          }, {"x": "9:00", "y": 14}, {"x": "10:00", "y": 17}, {"x": "11:00", "y": 3}, {
            "x": "12:00",
            "y": 28
          }, {"x": "13:00", "y": 44}, {"x": "14:00", "y": 29}, {"x": "15:00", "y": 6}, {
            "x": "16:00",
            "y": 34
          }, {"x": "17:00", "y": 17}, {"x": "18:00", "y": 9}, {"x": "19:00", "y": 14}, {
            "x": "20:00",
            "y": 3
          }, {"x": "21:00", "y": 18}, {"x": "22:00", "y": 12}, {"x": "23:00", "y": 15}]
        }, {
          "name": "Wednesday",
          "data": [{"x": "0:00", "y": 46}, {"x": "1:00", "y": 15}, {"x": "2:00", "y": 25}, {
            "x": "3:00",
            "y": 19
          }, {"x": "4:00", "y": 14}, {"x": "5:00", "y": 26}, {"x": "6:00", "y": 27}, {
            "x": "7:00",
            "y": 11
          }, {"x": "8:00", "y": 22}, {"x": "9:00", "y": 34}, {"x": "10:00", "y": 0}, {
            "x": "11:00",
            "y": 10
          }, {"x": "12:00", "y": 6}, {"x": "13:00", "y": 25}, {"x": "14:00", "y": 4}, {
            "x": "15:00",
            "y": 1
          }, {"x": "16:00", "y": 10}, {"x": "17:00", "y": 36}, {"x": "18:00", "y": 28}, {
            "x": "19:00",
            "y": 1
          }, {"x": "20:00", "y": 9}, {"x": "21:00", "y": 2}, {"x": "22:00", "y": 4}, {"x": "23:00", "y": 41}]
        }, {
          "name": "Thursday",
          "data": [{"x": "0:00", "y": 40}, {"x": "1:00", "y": 21}, {"x": "2:00", "y": 8}, {
            "x": "3:00",
            "y": 16
          }, {"x": "4:00", "y": 28}, {"x": "5:00", "y": 23}, {"x": "6:00", "y": 8}, {
            "x": "7:00",
            "y": 26
          }, {"x": "8:00", "y": 19}, {"x": "9:00", "y": 6}, {"x": "10:00", "y": 42}, {
            "x": "11:00",
            "y": 36
          }, {"x": "12:00", "y": 3}, {"x": "13:00", "y": 26}, {"x": "14:00", "y": 2}, {
            "x": "15:00",
            "y": 27
          }, {"x": "16:00", "y": 23}, {"x": "17:00", "y": 18}, {"x": "18:00", "y": 23}, {
            "x": "19:00",
            "y": 25
          }, {"x": "20:00", "y": 22}, {"x": "21:00", "y": 50}, {"x": "22:00", "y": 25}, {"x": "23:00", "y": 5}]
        }, {
          "name": "Friday",
          "data": [{"x": "0:00", "y": 16}, {"x": "1:00", "y": 16}, {"x": "2:00", "y": 22}, {
            "x": "3:00",
            "y": 20
          }, {"x": "4:00", "y": 28}, {"x": "5:00", "y": 10}, {"x": "6:00", "y": 4}, {
            "x": "7:00",
            "y": 15
          }, {"x": "8:00", "y": 4}, {"x": "9:00", "y": 4}, {"x": "10:00", "y": 30}, {
            "x": "11:00",
            "y": 1
          }, {"x": "12:00", "y": 48}, {"x": "13:00", "y": 6}, {"x": "14:00", "y": 22}, {
            "x": "15:00",
            "y": 10
          }, {"x": "16:00", "y": 23}, {"x": "17:00", "y": 16}, {"x": "18:00", "y": 10}, {
            "x": "19:00",
            "y": 4
          }, {"x": "20:00", "y": 10}, {"x": "21:00", "y": 24}, {"x": "22:00", "y": 22}, {"x": "23:00", "y": 7}]
        }, {
          "name": "Saturday",
          "data": [{"x": "0:00", "y": 21}, {"x": "1:00", "y": 22}, {"x": "2:00", "y": 0}, {
            "x": "3:00",
            "y": 27
          }, {"x": "4:00", "y": 28}, {"x": "5:00", "y": 8}, {"x": "6:00", "y": 20}, {
            "x": "7:00",
            "y": 10
          }, {"x": "8:00", "y": 0}, {"x": "9:00", "y": 2}, {"x": "10:00", "y": 30}, {
            "x": "11:00",
            "y": 12
          }, {"x": "12:00", "y": 30}, {"x": "13:00", "y": 8}, {"x": "14:00", "y": 17}, {
            "x": "15:00",
            "y": 6
          }, {"x": "16:00", "y": 25}, {"x": "17:00", "y": 26}, {"x": "18:00", "y": 17}, {
            "x": "19:00",
            "y": 11
          }, {"x": "20:00", "y": 30}, {"x": "21:00", "y": 32}, {"x": "22:00", "y": 8}, {"x": "23:00", "y": 15}]
        }, {
          "name": "Sunday",
          "data": [{"x": "0:00", "y": 46}, {"x": "1:00", "y": 9}, {"x": "2:00", "y": 16}, {
            "x": "3:00",
            "y": 3
          }, {"x": "4:00", "y": 12}, {"x": "5:00", "y": 8}, {"x": "6:00", "y": 10}, {
            "x": "7:00",
            "y": 18
          }, {"x": "8:00", "y": 12}, {"x": "9:00", "y": 47}, {"x": "10:00", "y": 0}, {
            "x": "11:00",
            "y": 13
          }, {"x": "12:00", "y": 27}, {"x": "13:00", "y": 10}, {"x": "14:00", "y": 13}, {
            "x": "15:00",
            "y": 40
          }, {"x": "16:00", "y": 15}, {"x": "17:00", "y": 18}, {"x": "18:00", "y": 15}, {
            "x": "19:00",
            "y": 14
          }, {"x": "20:00", "y": 5}, {"x": "21:00", "y": 7}, {"x": "22:00", "y": 25}, {"x": "23:00", "y": 47}]
        }],
        isFetching: false
      }
    });
    component = renderer.create(
      <Provider store={store}>
        <DeviceHour/>
      </Provider>
    );
  })
  it('should render Device hour with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
})