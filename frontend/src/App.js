import React, {Component} from 'react';
import './App.css';
import 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.css'

import DeviceType from "./components/deviceType/deviceType";
import Ranking from "./components/ranking/rankingChart";

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
            <div className="col-sm-4 box">
              <DeviceType/>
            </div>
            <div className="col-sm-7 box">Device</div>
          </div>
          <div className="row">
            <div className="col-sm-4 box">
              <Ranking/>
            </div>
            <div className="col-sm-4 box">Device hour</div>
            <div className="col-sm-3 box">Top 1</div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;