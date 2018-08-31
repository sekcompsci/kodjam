import {combineReducers} from 'redux'
import applications from './application';
import devices from './devices';

export default combineReducers({
    applications,
    devices
});
