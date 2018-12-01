import * as actions from '../actions';

const initialState = {
    devices: [],
};

export default (state=initialState, action) => {
    switch (action.type) {
        case actions.RECEIVE_ALL_DEVICES:
            const { devices } = action.payload;
            return {
                ...state,
                isFetching: false,
                devices,
            };
        case actions.REQUEST_ALL_DEVICES:
            return {
                ...state,
                isFetching: true,
            }
        default:
            return state;
    }
};