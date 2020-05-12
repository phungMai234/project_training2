import React, {useEffect, useState} from "react"
import "./linechart.css"
import Chart from "react-apexcharts";
import {getDataLineChart} from "../../actions/lineChart";
import {connect} from "react-redux";
import {Spinner} from "../spinner/spinner";


function LineChart(props) {
  const [date, setDate] = useState("day");
  const dateRange = props.dateRange;
  const dataLineChart = props.dataLineChart;
  const isFetching = props.isFetching;
  let selectedOS = props.selectedOS;

  useEffect(() => {
    const fetchData = () => {
      return props.getDataLineChart(dateRange, selectedOS, date)
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateRange, selectedOS, date]);

  let options = {
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    colors: ["#00cc99", "#8c1aff", "#ffff33", "#ff0000", "#00cc00", "#6c757d"]
  }
  return (
    <div className="line-chart">
      <div className="d-flex justify-content-between align-items-center">
        <label className="text-secondary">Device</label>
        <div className="type-date-custom">
          <div className="item">
            <span className="badge badge-custom "
                  style={{backgroundColor: date === "day" ? "#28A745" : "#ffffff"}}> </span>
            <button onClick={() => setDate("day")}>Day</button>
          </div>
          <div className="item">
            <span className="badge badge-custom"
                  style={{backgroundColor: date === "week" ? "#28A745" : "#ffffff"}}> </span>
            <button onClick={() => setDate("week")}>Week</button>
          </div>
          <div className="item">
            <span className="badge badge-custom"
                  style={{backgroundColor: date === "month" ? "#28A745" : "#ffffff"}}> </span>
            <button onClick={() => setDate("month")}>Month</button>
          </div>
        </div>
      </div>
      <div>
        {
          isFetching ? <Spinner/> :
            <Chart
              options={options}
              series={dataLineChart}
              type={"line"}
              height={"260"}
            />
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  dataLineChart: state.dataLineChart.data,
  isFetching: state.dataLineChart.isFetching,
  dateRange: state.dateRange.data,
  selectedOS: state.arrayOS.data
})
const mapDispatchToProps = (dispatch) => ({
  getDataLineChart: (dateRange, selectedOS, dateType) => dispatch(getDataLineChart(dateRange, selectedOS, dateType))
})

export default connect(mapStateToProps, mapDispatchToProps)(LineChart);