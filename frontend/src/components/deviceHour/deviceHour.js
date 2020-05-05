import React, {useEffect} from "react";
import {connect} from "react-redux"
import "./deviceHour.css"
import HeatMap from "../heatMap/heatMap";
import BarChart from "../barChart/barChart";
import {Spinner} from "../spinner/spinner";
import {getHour} from "../../actions/deviceHour";

function DeviceHour(props) {
  const isFetching = props.isFetching;
  const dateRange = props.dateRange;

  useEffect(() => {
    const fetchData = () => {
      return props.getHour(dateRange);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateRange]);
  return (<div className="device-hour">
    <label className="text-secondary">Device by hour</label>
    {
      isFetching ? <Spinner/> :
        <div className="row">
          <div className="col-sm-9">
            <HeatMap/>
          </div>
          <div className="col-sm-3">
            <BarChart/>
          </div>
        </div>
    }
  </div>);

}

const mapStateToProps = state => ({
  isFetching: state.hour.isFetching,
  dateRange: state.dateRange.data
})
const mapDispatchToProps = dispatch => ({
  getHour: (dateRange) => dispatch(getHour(dateRange))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviceHour);