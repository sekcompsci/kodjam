import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import Reducer from './reducers/index';
import Route from './Route'
import 'antd/dist/antd.css';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <Route/>
    </Provider>, document.getElementById('root')
);

registerServiceWorker();
