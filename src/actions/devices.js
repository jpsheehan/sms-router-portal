export const REQUEST_ALL_DEVICES = 'REQUEST_ALL_DEVICES';
const receiveAllDevices = (devices) => ({
    type: RECEIVE_ALL_DEVICES,
    payload: {
        devices,
    },
});

export const SELECT_DEVICE = 'SELECT_DEVICE';
const selectDevice = (id) => ({
    type: SELECT_DEVICE,
    payload: {
        id,
    }
});

export const RECEIVE_ALL_DEVICES = 'RECEIVE_ALL_DEVICES';
const requestAllDevices = () => ({
    type: REQUEST_ALL_DEVICES,
});

export const REQUEST_DEVICE_INBOX = 'REQUEST_DEVICE_INBOX';
const requestDeviceInbox = () => ({
    type: REQUEST_DEVICE_INBOX,
});

export const RECEIVE_DEVICE_INBOX = 'RECEIVE_DEVICE_INBOX';
const receiveDeviceInbox = (inbox) => ({
    type: RECEIVE_DEVICE_INBOX,
    payload: {
        inbox,
    }
});

export const REQUEST_DEVICE_OUTBOX = 'REQUEST_DEVICE_OUTBOX';
const requestDeviceOutbox = () => ({
    type: REQUEST_DEVICE_OUTBOX,
});

export const RECEIVE_DEVICE_OUTBOX = 'RECEIVE_DEVICE_OUTBOX';
const receiveDeviceOutbox = (outbox) => ({
    type: RECEIVE_DEVICE_OUTBOX,
    payload: {
        outbox,
    },
});

// export const REQUEST_DELETE_MESSAGE = 'REQUEST_DELETE_MESSAGE';
// const requestDeleteMessage = (id) => ({
//     type: REQUEST_DELETE_MESSAGE,
//     payload: {
//         id
//     }
// });

// export const REQUEST_CREATE_MESSAGE = 'REQUEST_CREATE_MESSAGE';
// const requestCreateMessage = (number, text) => ({
//     type: REQUEST_CREATE_MESSAGE,
//     payload: {
//         number,
//         text
//     }
// });

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
            });
    };
};

export function selectDeviceAndFetchBoxes(id) {
    return (dispatch, getState) => {
        dispatch(selectDevice(id));
        (fetchDeviceInbox())(dispatch, getState);
        (fetchDeviceOutbox())(dispatch, getState);
    };
}

export function fetchDeviceInbox() {
    return (dispatch, getState) => {
        const { id } = getState().devices;
        dispatch(requestDeviceInbox());
        return fetch(`/devices/${id}/inbox`)
            .then(
                response => response.json(),
                error => console.warn(error)
            )
            .then(json => {
                dispatch(receiveDeviceInbox(json));
            });
    };
}

export function fetchDeviceOutbox() {
    return (dispatch, getState) => {
        const { id } = getState().devices;
        dispatch(requestDeviceOutbox());
        return fetch(`/devices/${id}/outbox`)
            .then(
                response => response.json(),
                error => console.warn(error)
            )
            .then(json => {
                dispatch(receiveDeviceOutbox(json));
            });
    };
}

export function doCreateMessage(number, text) {
    return (dispatch, getState) => {
        const { id } = getState().devices;
        return fetch(`/devices/${id}/outbox`, {
                method: 'POST',
                body: JSON.stringify({
                    number,
                    text
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(
                response => response.json(),
                error => console.warn(error)
            )
            .then(json => {
                dispatch(fetchDeviceOutbox());
            });
    }
}

export function doDeleteMessage(messageId) {
    return (dispatch, getState) => {
        const { id } = getState().devices;
        return fetch(`/devices/${id}/inbox/${messageId}`, {
            method: 'DELETE',
        })
        .then(
            response => response.json(),
            error => console.warn(error)
        )
        .then(json => {
            dispatch(fetchDeviceInbox());
        });
    }
}