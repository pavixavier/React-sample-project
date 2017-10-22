// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Store/Store';

import { Provider } from 'react-redux';

ReactDOM.render(
     <Provider store={store} >
        <App />
     </Provider> , document.getElementById('root')
 );