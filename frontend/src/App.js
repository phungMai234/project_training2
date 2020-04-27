import React, {Component} from 'react';
import './App.css';
import 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.css'

import DeviceType from "./components/deviceType/deviceType";
import Ranking from "./components/ranking/rankingChart";
import DeviceHour from "./components/deviceHour/deviceHour";

class App extends Component {
  render() {
    return (
      <div className="container-analysis">
        <div className="header">
          <div className="row align-items-center">
            <span>Analysis</span>
            <span className="text-secondary ml-4">Device List</span>
          </div>
          <div className="row align-items-center">
            <label className="font-1">Range</label>
          </div>
        </div>
        <div className="body">
          <div className="row">
            <div className="col-sm-3 box">
              <DeviceType/>
            </div>
            <div className="col-sm-8 box">Device</div>
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
}

export default App;