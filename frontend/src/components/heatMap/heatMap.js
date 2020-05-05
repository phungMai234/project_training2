import React from "react"
import Chart from "react-apexcharts";
import {connect} from "react-redux"
import "./heatMap.css"
import _ from 'lodash'

function HeatMap(props) {

  const data = props.hour;

  let options = {
    plotOptions: {
      heatmap: {
        radius: 2
      },

    },
    responsive: [
      {
        breakpoint: 500,
        options: {
          plotOptions: {
            heatmap: {
              horizontal: false
            }
          },
        }
      }
    ],
    colors: ["#9c33ff"],
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    yaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        show: true,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false
      },
    },
    tooltip: {
      shared: false,
      x: {
        show: true,
      },
    }
  }
  return (
    <div className="row justify-content-center p-0">
      <Chart options={options}
             series={_.reverse(data)}
             type="heatmap"
             width={"500"}
             height={"260"}
      />
      <div className="progress-heatmap">
      </div>
      <div className="number-progress">
        <div>0</div>
        <div>10</div>
        <div>20</div>
        <div>30</div>
        <div>40</div>
        <div>50</div>
      </div>
    </div>)

}

const mapStateToProps = state => ({
  hour: state.hour.data
})
export default connect(mapStateToProps, null)(HeatMap);