import {CREATE_APPLICATION, DELETE_APPLICATION} from '../actions/application';

const initState = {
    app: [{
        key: 1,
        application: 'IoTTesting',
        keys: 10,
        things: 220
    }, {
        key: 2,
        application: 'NETPIEIoT',
        keys: 12,
        things: 260
    }, {
        key: 3,
        application: 'NBIoTDevice',
        keys: 5,
        things: 110
    }, {
        key: 4,
        application: 'LoRaWANDevice',
        keys: 8,
        things: 80
    }]
};

function Applications(state = initState, action) {
    switch (action.type) {
        case CREATE_APPLICATION:
            return {
                ...state, app: [...state.app, {
                    key: action.key,
                    application: action.application,
                    keys: action.keys,
                    things: action.things
                }]
            };
        case DELETE_APPLICATION:
            return {...state, application: state.application.filter(app => app.key !== action.key)};
        default:
            return state;
    }
}

export default Applications;