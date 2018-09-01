import {SET_NAME, SET_PROFILE} from '../actions/user';

const initState = {
    name: null,
    picture: null
};

function Users(state = initState, action) {
    switch (action.type) {
        case SET_NAME:
            return {...state, name: action.name};
        case SET_PROFILE:
            return {...state, picture: action.url};
        default:
            return state;
    }
}

export default Users;