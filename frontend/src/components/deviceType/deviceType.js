import React, { useState, useEffect } from 'react';
import './deviceType.css';
import {connect} from "react-redux"
import {VictoryPie} from "victory"
import {getDeviceType} from "../../actions/deviceType";

function DeviceType(props) {
  const [iOS, setIOS] = useState(props.types.iOS)
  const [android, setAndroid] = useState(props.types.android);

  useEffect(() =>{
    props.fetchData();
  },[])

    return (
      <div className="device-type">
        <label>Devive Type</label>
        <div className="chart">
          <svg width={300} height={300}>
            <circle cx={150} cy={150} r={50} fill="#ffffff"/>
            <VictoryPie
              standalone={false}
              colorScale={["#00cc99","#8c1aff"]}
              width={300} height={300}
              innerRadius={75}
              data={[
                {x:" ", y:android},
                {x:" ",y:iOS}
              ]}
            />
          </svg>
          <div>
            <div>
              <div className="title-pie">
                <div className="box-custom ios"> </div>
                <label>iOS</label>
              </div>
              <label>{iOS} %</label>
            </div>
            <div>
              <div className="title-pie">
                <div className="box-custom android"> </div>
                <label>Android</label>
              </div>
              <label>{android} %</label>
            </div>
          </div>
        </div>

      </div>
    );

}
const mapStateToProps = (state) =>{
  return {
    types: state.types
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => getDeviceType(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceType);