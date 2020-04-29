import {rankingReducer} from "../../reducers/rankingChart";
import {getRanking} from "../../actions/rankingChart";
import {GET_RANKING} from "../../constants/action-types";

const initialState = {
  data: [],
  isFetching: false
}
describe("ranking reducer", () => {
  it("should get ranking to empty list", () => {
    expect(rankingReducer(initialState, getRanking())).toMatchSnapshot();
  })
  it('should handle unknown actions', () => {
    expect(rankingReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle loading time", () => {
    expect(rankingReducer(initialState, {type: GET_RANKING.PENDING})).toEqual({data: [], isFetching: true});
  })
  it('should handle error', (err = "error") => {
    expect(rankingReducer(initialState, {type: GET_RANKING.ERROR, message: err})).toEqual({
      data: [],
      isFetching: false,
      errorMessage: err
    });
  });
})