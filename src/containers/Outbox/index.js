// Outbox/index.js
import { connect } from 'react-redux';
import Outbox from '../../components/Outbox';

import {
    fetchDeviceOutbox,
    doCreateMessage,
} from '../../actions';

/**
 * Maps the redux state to the Outbox Component's props.
 * 
 * @param {Object} state The redux state.
 * @param {Object} ownProps The current props of the Outbox Component.
 * @return {Object} Returns an object containing updated props from the redux store.
 */
function mapStateToProps(state, ownProps) {
    const { outbox, id } = state.devices;
    return {
        outbox: Object.keys(outbox).map(key => outbox[key]),
        selectedId: id
    };
}

/**
 * Maps the redux actions to the Inbox Component's props.
 * 
 * @param {Object} dispatch The redux dispatch function.
 * @param {Object} ownProps The current props of the Inbox Component.
 * @return {Object} Returns an object containing the actions to update the redux store.
 */
function mapDispatchToProps(dispatch, ownProps) {
    return {
        fetchDeviceOutbox: () => dispatch(fetchDeviceOutbox()),
        doCreateMessage: (number, text) => dispatch(doCreateMessage(number, text)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Outbox);
