import {CREATE_DEVICE, DELETE_DEVICE} from '../actions/devices';

const initState = {
    devices: [{
        key: 1,
        name: 'arduino-uno1',
        type: 'device',
        token: 'xxj34oZJAAh17aQ:vHUBQC8mMUoBjQg6Tzur55aq0',
        appOwner: 'IoTTesting'
    }, {
        key: 2,
        name: 'arduino-uno2',
        type: 'device',
        token: 'xCj34oZJAAhl1aE:qHUBQH8mMUoBjQg6Tzur55aq0',
        appOwner: 'IoTTesting'
    }, {
        key: 3,
        name: 'freeboard',
        type: 'session',
        token: 'xUitMoeeAAhl1aE:qQSCZH8mMUoBjQg6Tzur13aqE',
        appOwner: 'IoTTesting'
    }, {
        key: 4,
        name: 'node-red',
        type: 'session',
        token: '0EFWZTxu2Lga7Ri:uZHKAJhecrcR5neX0CH5SDySg',
        appOwner: 'IoTTesting'
    }, {
        key: 5,
        name: 'smartplug',
        type: 'device',
        token: 'xUFWZTxu2Lga7aE:qZHKAH8mMUoBjQg6Tzur13aqE',
        appOwner: 'IoTTesting'
    }, {
        key: 6,
        name: 'arduino1',
        type: 'device',
        token: 'xxj34oZJAAh17aQ:vHUBQC8mMUoBjQg6Tzur55aq0',
        appOwner: 'NETPIEIoT'
    }, {
        key: 8,
        name: 'freeboard1',
        type: 'session',
        token: 'xUitMoeeAAhl1aE:qQSCZH8mMUoBjQg6Tzur13aqE',
        appOwner: 'NETPIEIoT'
    }, {
        key: 9,
        name: 'freeboard2',
        type: 'session',
        token: '0EFWZTxu2Lga7Ri:uZHKAJhecrcR5neX0CH5SDySg',
        appOwner: 'NETPIEIoT'
    }]
};

function Devices(state = initState, action) {
    switch (action.type) {
        case CREATE_DEVICE:
            return {
                ...state, devices: [...state.devices, {
                    key: action.key,
                    name: action.name,
                    type: action.option,
                    token: action.token,
                    appOwner: action.appOwner
                }]
            };
        case DELETE_DEVICE:
            return {...state, devices: state.devices.filter(device => device.key !== action.key)};
        default:
            return state;
    }
}

export default Devices;