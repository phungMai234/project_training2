import React from 'react';
import './deviceType.css';
import {VictoryPie} from "victory"
import {getDeviceType} from "../../actions/deviceType";
import {useSelector, useDispatch} from 'react-redux';

function DeviceType() {
  const iOS = useSelector(state => state.types.iOS)
  const android = useSelector(state => state.types.android);

  const dispatch = useDispatch();
  getDeviceType(dispatch);

  return (
    <div className="device-type">
      <label>Devive Type</label>
      <div className="chart">
        <svg width={300} height={300}>
          <circle cx={150} cy={150} r={50} fill="#ffffff"/>
          <VictoryPie
            standalone={false}
            colorScale={["#00cc99", "#8c1aff"]}
            width={300} height={300}
            innerRadius={75}
            data={[
              {x: " ", y: android},
              {x: " ", y: iOS}
            ]}
          />
        </svg>
        <div>
          <div>
            <div className="title-pie">
              <div className="box-custom ios">&nbsp;</div>
              <label>iOS</label>
            </div>
            <label>{iOS} %</label>
          </div>
          <div>
            <div className="title-pie">
              <div className="box-custom android">&nbsp;</div>
              <label>Android</label>
            </div>
            <label>{android} %</label>
          </div>
        </div>
      </div>

    </div>
  );
}

export default DeviceType;
