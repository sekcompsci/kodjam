import {SET_NAME, SET_PROFILE, SET_USER_ID} from '../actions/user';

const initState = {
    name: null,
    picture: null,
    uid: null
};

function Users(state = initState, action) {
    switch (action.type) {
        case SET_NAME:
            return {...state, name: action.name};
        case SET_PROFILE:
            return {...state, picture: action.url};
        case SET_USER_ID:
            return {...state, uid: action.uid};
        default:
            return state;
    }
}

export default Users;