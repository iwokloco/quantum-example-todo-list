import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { qs } from 'quantum-store';
import { FILTER_ALL } from './Constants';

qs.init({
  todo: {
    filter: FILTER_ALL,
    list: [],
    lastId: 0
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
