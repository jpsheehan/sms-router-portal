import * as actions from '../actions';

const initialState = {
    devices: [],
    devicesFetching: false,
    inboxFetching: false,
    outboxFetching: false,
    inbox: [],
    outbox: [],
    id: "",
};

export default (state=initialState, action) => {
    switch (action.type) {
        case actions.RECEIVE_ALL_DEVICES:
            const { devices } = action.payload;
            return {
                ...state,
                devicesFetching: false,
                devices,
            };
        case actions.REQUEST_ALL_DEVICES:
            return {
                ...state,
                devicesFetching: true,
            };
        case actions.SELECT_DEVICE:
            const { id } = action.payload;
            return {
                ...state,
                id,
            };
        case actions.REQUEST_DEVICE_INBOX:
            return {
                ...state,
                inboxFetching: true,
            };
        case actions.RECEIVE_DEVICE_INBOX:
            const { inbox } = action.payload;
            return {
                ...state,
                inboxFetching: false,
                inbox,
            };
        case actions.REQUEST_DEVICE_OUTBOX:
            return {
                ...state,
                outboxFetching: true,
            };
        case actions.RECEIVE_DEVICE_OUTBOX:
            const { outbox } = action.payload;
            return {
                ...state,
                outboxFetching: false,
                outbox,
            }
        default:
            return state;
    }
};