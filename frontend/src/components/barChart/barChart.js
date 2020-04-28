import React from "react"
import {connect} from "react-redux"
import _ from 'lodash';
import Chart from "react-apexcharts";

function BarChart(props) {
  const dataHour = props.hour;

  const newList = _.map(dataHour, (e) => e.data.map(e => e.y));
  const list = newList.map(e => _.sum(e));
  const maxListBar = _.max(list);

  const barList = _.map(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], (day, index) => ({
    x: day,
    y: list[index]
  }))
  const bar = [{data: barList}];

  let options = {
    plotOptions: {
      bar: {
        background: "#f2f2f2",
        horizontal: true,
        startingShape: 'flat',
        endingShape: 'rounded',
        barHeight: '90%%',
        colors: {
          ranges: [{
            from: 0,
            to: 1000,
            color: "#00cc99"
          }],
          backgroundBarColors: ["#f2f2f2"],
          backgroundBarOpacity: 1,
          backgroundBarRadius: 2,
        },
      }
    },
    grid: {
      show: false
    },
    yaxis: {
      labels: {
        style: {
          colors: [],
          fontSize: '14px',
          fontFamily: 'Times New Roman',
        },
      },
      axisTicks: {
        show: false,
      },
      min: 0,
      max: maxListBar
    },
    xaxis: {
      labels: {
        show: false
      },
      axisTicks: {
        show: false,
        width: maxListBar
      },
      axisBorder: {
        show: false
      },

    },

  }
  return (
    <Chart options={options} series={bar} type="bar" height={"260"}/>
  )

}

const mapStateToProps = state => ({
  hour: state.hour.data,
})

export default connect(mapStateToProps)(BarChart);