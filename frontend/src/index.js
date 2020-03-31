import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux'
import {store} from "./store";

ReactDOM.render(
<<<<<<< HEAD
  <Provider store={store}>
    <App/>
  </Provider>,
=======
    <Provider store={store}>
        <App />
    </Provider>,
>>>>>>> 3192a90e76a73f76f3377cd371d1f1101668d4e5
  document.getElementById('root')
);
