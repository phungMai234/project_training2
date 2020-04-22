import React, {useEffect} from 'react';
import './deviceType.css';
import {connect} from "react-redux"
import {VictoryPie} from "victory"
import {getTypes} from "../../actions/deviceType";
import {Spinner} from "../spinner/spinner";


function DeviceType(props) {

  let iOS = props.types.iOS;
  let android = props.types.android;
  let isFetching = props.isFetching;

  useEffect(() => {
    const fetchData = () => {
      return props.getTypes();
    }
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="device-type">
      <label className="text-secondary">Devive Type</label>
      {
        isFetching ? <Spinner/>
          :
          <div className="d-flex justify-content-center">
            <svg width={200} height={200}>
              <circle cx={150} cy={150} r={50} fill="#ffffff"/>
              <VictoryPie
                standalone={false}
                responsive={false}
                colorScale={["#00cc99", "#8c1aff"]}
                width={200} height={200}
                innerRadius={75}
                data={[
                  {x: " ", y: android},
                  {x: " ", y: iOS}
                ]}
              />
            </svg>
            <div className="d-flex align-items-center">
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
      }

    </div>
  );

}

const mapStateToProps = (state) => ({
  types: state.types.data,
  isFetching: state.types.isFetching
})

const mapDispatchToProps = dispatch => ({
  getTypes: () => dispatch(getTypes())
})

export default connect(mapStateToProps, mapDispatchToProps)(DeviceType);