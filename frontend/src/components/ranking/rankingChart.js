import React, {useEffect} from "react";
import "./ranking.css"
import RankingItem from "../rankingItem/rankingItem";
import {connect} from "react-redux";
import {getRanking} from "../../actions/rankingChart";
import {Spinner} from "../spinner/spinner";

function RankingChart(props) {
  let listLevel = props.rankings;
  let isFetching = props.isFetching;
  let query = props.query;

  useEffect(() => {
    const fetchData = () => {
      return props.getRanking(query);
    }
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  return (
    <div className="ranking">
      <label className="text-secondary">Ranking</label>
      <div className="d-flex justify-content-between">
        <span>Day</span>
        <span>Number</span>
      </div>
      {isFetching ? <Spinner/> :
        listLevel.map((e, index) => {
          return <RankingItem key={index} day={index + 1} level={e}/>
        })
      }
    </div>

  )
}

const mapStateToProps = (state) => ({
  rankings: state.rankings.data,
  isFetching: state.rankings.isFetching,
  query: state.query.data
})

const mapDispatchToProps = dispatch => ({
  getRanking: (query) => dispatch(getRanking(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(RankingChart);