export const SET_NAME = 'SET_NAME';
export const SET_PROFILE = 'SET_PROFILE';
export const SET_USER_ID = 'SET_USER_ID';

export function setName(name) {
    return {type: SET_NAME, name};
}

export function setProfile(url) {
    return {type: SET_PROFILE, url};
}

export function setUserID(uid) {
    return {type: SET_USER_ID, uid};
}