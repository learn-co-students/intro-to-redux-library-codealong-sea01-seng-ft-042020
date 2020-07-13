// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';
import reactDom from 'react-dom';
import Provider from 'react-redux/lib/components/Provider';

//const store = createStore(shoppingListItemReducer);
const store = createStore(
    shoppingListItemReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ); /* code change */

//ReactDOM.render(<App />, document.getElementById('root'));
reactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
