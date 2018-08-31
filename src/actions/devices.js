export const CREATE_DEVICE = 'CREATE_DEVICE';
export const DELETE_DEVICE = 'DELETE_DEVICE';

let key = 10;

export function createDevice(device) {
    return {type: CREATE_DEVICE, key: key++, ...device};
}

export function deleteDevice(key) {
    return {type: DELETE_DEVICE, key};
}
