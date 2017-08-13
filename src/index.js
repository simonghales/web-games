import React from 'react';
import ReactDOM from 'react-dom';
import './styles/core.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App/App';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
