import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/reset-css.css';
import Container from './component/Container.jsx'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Container />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
