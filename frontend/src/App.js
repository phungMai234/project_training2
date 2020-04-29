import React, {useState, useEffect} from 'react';
import './App.css';
import 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.css'
import moment from "moment"
import DeviceType from "./components/deviceType/deviceType";
import Ranking from "./components/ranking/rankingChart";
import DeviceHour from "./components/deviceHour/deviceHour";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from 'react-dates';
import {START_DATE, END_DATE} from "react-dates/constants";
import {connect} from "react-redux";
import {getQuery} from "./actions/query";

function App(props) {

  const [startDate, setStartDate] = useState(moment(Date.now()));
  const [endDate, setEndDate] = useState(moment(Date.now()));
  const [change, setChange] = useState(true)
  const [focus, setFocus] = useState(null);

  useEffect(() => {
    const updateQuery = () => {
      let query = {
        startDate: startDate.format("YYYY/MM/DD"),
        endDate: endDate.format("YYYY/MM/DD")
      }
      return props.getQuery(query);
    }
    updateQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [change]);

  return (
    <div className="container-analysis">
      {
        console.log("dem")
      }
      <div className="header">
        <div className="row align-items-center">
          <span>Analysis</span>
          <span className="text-secondary ml-4">Device List</span>
        </div>
        <div className="row align-items-center">
          <label className="font-1 mr-3">Range</label>
          <DateRangePicker
            startDate={startDate} // momentPropTypes.momentObj or null,
            startDateId={START_DATE} // PropTypes.string.isRequired,
            endDate={endDate} // momentPropTypes.momentObj or null,
            endDateId={END_DATE} // PropTypes.string.isRequired,
            onDatesChange={({startDate, endDate}) => {
              setStartDate(startDate);
              setEndDate(endDate);
              if (startDate && endDate)
                setChange(!change)

            }} // PropTypes.func.isRequired,
            focusedInput={focus} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => setFocus(focusedInput)} // PropTypes.func.isRequired,
          />
        </div>
      </div>
      <div className="body">
        <div className="row">
          <div className="col-sm-3 box">
            <DeviceType/>
          </div>
          <div className="col-sm-8 box">Device</div>
        </div>
        <div className="row">
          <div className="col-sm-3 box">
            <Ranking/>
          </div>
          <div className="col-sm-6 box"><DeviceHour/></div>
          <div className="col-sm-2 box">Top</div>
        </div>
      </div>
    </div>

  );
}

const mapDispatchToProps = (dispatch) => ({
  getQuery: (query) => dispatch(getQuery(query))
});

export default connect(null, mapDispatchToProps)(App);