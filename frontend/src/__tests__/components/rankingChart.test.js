import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import RankingChart from "../../components/ranking/rankingChart";

const mockStore = configureStore([]);

describe('Ranking Chart Component', () => {
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
      rankings: {
        data: [20, 4, 5, 7, 2, 4, 8],
        isFetching: false
      }
    });
    component = renderer.create(
      <Provider store={store}>
        <RankingChart/>
      </Provider>
    );
  })
  it('should render Ranking Chart with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
})