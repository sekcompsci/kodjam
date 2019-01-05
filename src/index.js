import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import {CookiesProvider} from 'react-cookie';
import Reducer from './reducers/index';
import Route from './Route'
import 'antd/dist/antd.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <CookiesProvider>
        <Provider store={store}>
            <Route/>
        </Provider>
    </CookiesProvider>, document.getElementById('root')

);

registerServiceWorker();
