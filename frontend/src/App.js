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
import {getDateRange} from "./actions/dateRange";
import LineChart from "./components/lineChart/lineChart";
import MultiSelectBar from "./components/multiSelectBar/multiSelectBar";


function App(props) {

  const defaultDate = moment(Date.now());
  const [startDate, setStartDate] = useState(moment().subtract(1, 'months'));
  const [endDate, setEndDate] = useState(defaultDate);
  const [changeDateRange, setChangeDateRange] = useState(true)
  const [focus, setFocus] = useState(null);


  const handleDateRangeSelection = ({startDate, endDate}) => {

    setStartDate(startDate ? startDate : defaultDate);
    setEndDate(endDate ? endDate : startDate ? startDate : defaultDate);

    if (startDate && endDate)
      setChangeDateRange(!changeDateRange);
  }
  useEffect(() => {
    const updateDateRange = () => {
      let dateRange = {
        startDate: startDate ? startDate.format("YYYY-MM-DD") : null,
        endDate: endDate ? endDate.format("YYYY-MM-DD") : null
      }
      return props.getDateRange(dateRange)
    }
    updateDateRange();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeDateRange]);

  return (

    <div className="container-analysis">
      <div className="header d-flex justify-content-between align-items-center m-2">
        <div>
          <div className="align-items-center">
            <span>Analysis</span>
            <span className="text-secondary ml-4">Device List</span>
          </div>
          <div className="align-items-center">
            <label className="font-1 mr-3">Range</label>
            <DateRangePicker
              startDate={startDate} // momentPropTypes.momentObj or null,
              startDateId={START_DATE} // PropTypes.string.isRequired,
              endDate={endDate} // momentPropTypes.momentObj or null,
              endDateId={END_DATE} // PropTypes.string.isRequired,
              onDatesChange={handleDateRangeSelection}// PropTypes.func.isRequired,
              minimumNights={0}
              focusedInput={focus} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => setFocus(focusedInput)} // PropTypes.func.isRequired,
              isOutsideRange={() => false}
              displayFormat="DD/MM/YYYY"
              inputIconPosition="after"
            />
          </div>
        </div>
        <div className="align-items-center">
          <MultiSelectBar/>
        </div>
      </div>
      <div className="body">
        <div className="row">
          <div className="col-sm-4 box">
            <DeviceType/>
          </div>
          <div className="col-sm-7 box"><LineChart/></div>
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
  getDateRange: (dateRange) => dispatch(getDateRange(dateRange)),
});

export default connect(null, mapDispatchToProps)(App);