export const REQUEST_ALL_DEVICES = 'REQUEST_ALL_DEVICES';
const receiveAllDevices = (devices) => ({
    type: RECEIVE_ALL_DEVICES,
    payload: {
        devices,
    },
});

export const RECEIVE_ALL_DEVICES = 'RECEIVE_ALL_DEVICES';
const requestAllDevices = () => ({
    type: REQUEST_ALL_DEVICES,
    payload: {
        isFetching: true,
    }
});

export function fetchAllDevices() {
    return (dispatch) => {
        dispatch(requestAllDevices);
        return fetch(`/devices`)
            .then(
                response => response.json(),
                error => console.warn(error)
            )
            .then(json => {
                dispatch(receiveAllDevices(json));
            })
    };
};