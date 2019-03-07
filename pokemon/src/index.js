import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyComponent from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MyComponent />, document.getElementById('root'));

serviceWorker.unregister();
