export const CREATE_APPLICATION = 'CREATE_APP';
export const DELETE_APPLICATION = 'DELETE_APP';

let key = 5;

export function createApp(app) {
    return {type: CREATE_APPLICATION, key: key++, ...app};
}

export function deleteApp(key) {
    return {type: DELETE_APPLICATION, key};
}
