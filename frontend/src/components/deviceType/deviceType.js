import React, {useEffect} from 'react';
import './deviceType.css';
import {connect} from "react-redux"
import {VictoryPie} from "victory"
import {getTypes} from "../../actions/deviceType";
import {Spinner} from "../spinner/spinner";
import _ from "lodash"
import MultiSelectBar from "../multiSelectBar/multiSelectBar"


function DeviceType(props) {

  let isFetching = props.isFetching;
  let dateRange = props.dateRange;
  let arrayOS = props.arrayOS;
  let selectedOS = props.selectedOS;

  const colorRange = ["#00cc99", "#8c1aff", "#ffff33", "#ff0000", "#00cc00", "#6c757d"];

  const newArrayOS = _.map(arrayOS, (e, index) => ({
    x: e.x,
    y: e.y,
    bgColor: colorRange[index]
  }))

  useEffect(() => {
    const fetchData = () => {
      return props.getTypes(dateRange, selectedOS);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateRange, selectedOS]);

  return (
    <div className="device-type">
      <div className="d-flex justify-content-between align-items-center">
        <label className="text-secondary">Devive Type</label>
        <MultiSelectBar/>
      </div>

      {
        isFetching ? <Spinner/>
          :
          <div className="d-flex justify-content-center align-items-center">
            <svg width={200} height={200}>
              <circle cx={150} cy={150} r={50} fill="#ffffff"/>
              <VictoryPie
                standalone={false}
                responsive={false}
                colorScale={colorRange}
                width={200} height={200}
                innerRadius={75}
                data={
                  _.map(arrayOS, e => ({
                    x: " ",
                    y: e.y
                  }))
                }
              />
            </svg>
            <div className="d-flex align-items-center">
              <ul className="custom-list">
                {

                  (newArrayOS || []).map((e, index) => {
                    return (
                      <li key={index} className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="badge" style={{backgroundColor: e.bgColor}}> </span>
                          <span className="title-pie">{e.x}</span>
                        </div>
                        <div className="pl-4">{e.y} %</div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
      }

    </div>
  );

}

const mapStateToProps = (state) => {
  return {
    arrayOS: state.types.data.data,
    isFetching: state.types.isFetching,
    dateRange: state.dateRange.data,
    selectedOS: state.arrayOS.data
  }
}

const mapDispatchToProps = dispatch => ({
  getTypes: (dateRange, arrayOS) => dispatch(getTypes(dateRange, arrayOS))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeviceType);