// Inbox/index.js
import { connect } from 'react-redux';
import Inbox from '../../components/Inbox';

import {
    fetchDeviceInbox,
    doDeleteMessage,
} from '../../actions';

/**
 * Maps the redux state to the Inbox Component's props.
 * 
 * @param {Object} state The redux state.
 * @param {Object} ownProps The current props of the Inbox Component.
 * @return {Object} Returns an object containing updated props from the redux store.
 */
function mapStateToProps(state, ownProps) {
    const { inbox, id } = state.devices;
    return {
        inbox: Object.keys(inbox).map(key => inbox[key]),
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
        fetchDeviceInbox: () => dispatch(fetchDeviceInbox()),
        doDeleteMessage: (id) => dispatch(doDeleteMessage(id))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Inbox);
