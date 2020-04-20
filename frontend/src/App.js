import React, {Component} from 'react';
import './App.css';
import 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.css'

import DeviceType from "./components/deviceType/deviceType";

class App extends Component {
  render() {
    return (
        <DeviceType/>

    );
  }
}
export default App;