export const SET_NAME = 'SET_NAME';
export const SET_PROFILE = 'SET_PROFILE';

export function setName(name) {
    console.log(name);
    return {type: SET_NAME, name};
}

export function setProfile(url) {
    console.log(url);
    return {type: SET_PROFILE, url};
}