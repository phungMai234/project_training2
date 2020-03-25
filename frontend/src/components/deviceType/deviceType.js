import React, { Component } from 'react';
import './deviceType.css';
import {connect} from "react-redux"
import {VictoryPie} from "victory"

class DeviceType extends Component {
    componentWillMount() {
        this.props.getDeviceType();
    }
    render() {
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
                                {x:" ", y:this.props.types.android},
                                {x:" ",y:this.props.types.iOS}
                            ]}
                        />
                    </svg>
                    <div>
                        <div>
                            <div className="title-pie">
                                <div className="box-custom ios"> </div>
                                <label>iOS</label>
                            </div>
                            <label>{this.props.types.iOS} %</label>
                        </div>
                        <div>
                            <div className="title-pie">
                                <div className="box-custom android"> </div>
                                <label>Android</label>
                            </div>
                            <label>{this.props.types.android} %</label>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    console.log("map", state)
    return {
        types: state.types
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDeviceType: () => dispatch({
            type:'API',
            payload:{
                url:'/request/device_summary'
            }
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceType)
