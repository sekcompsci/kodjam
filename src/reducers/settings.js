import {SET_TAB, SET_FOOTER_TYPE} from '../actions/settings';

const initState = {
    tab: 0,
    footerType: 'main'
};

function Settings(state = initState, action) {
    switch (action.type) {
        case SET_TAB:
            return {...state, tab: action.val};
        case SET_FOOTER_TYPE:
            return {...state, footerType: action.val};
        default:
            return state;
    }
}

export default Settings;