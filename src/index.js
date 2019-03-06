import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import { install } from "@material-ui/styles";
install();

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
