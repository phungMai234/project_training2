import React from "react"
import "./rankingItem.css"
import PropTypes from 'prop-types';

function RankingItem(props) {
  let day = props.day;
  let level = props.level;
  let percent = (level / 20) * 100 + "%";

  return (
    <div className="progress d-flex justify-content-between">
      <div className="progress-bar align-items-start" style={{width: percent}}>
        <span>Day {day}</span>
      </div>
      <span>{level}</span>
    </div>
  )
}

RankingItem.propTypes = {
  day: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired
}
export default RankingItem;