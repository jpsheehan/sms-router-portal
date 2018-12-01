// PeriodicFetcher/index.js
import { connect } from 'react-redux';
import PeriodicFetcher from '../../components/PeriodicFetcher';

import {
    fetchDeviceInbox,
    fetchDeviceOutbox,
} from '../../actions';

/**
 * Maps the redux state to the PeriodicFetcher Component's props.
 * 
 * @param {Object} state The redux state.
 * @param {Object} ownProps The current props of the PeriodicFetcher Component.
 * @return {Object} Returns an object containing updated props from the redux store.
 */
function mapStateToProps(state, ownProps) {
    const { id, inboxFetching, outboxFetching } = state.devices;
    return {
        selectedId: id,
        inboxFetching,
        outboxFetching,
    };
}

/**
 * Maps the redux actions to the PeriodicFetcher Component's props.
 * 
 * @param {Object} dispatch The redux dispatch function.
 * @param {Object} ownProps The current props of the PeriodicFetcher Component.
 * @return {Object} Returns an object containing the actions to update the redux store.
 */
function mapDispatchToProps(dispatch, ownProps) {
    return {
        fetchDeviceInbox: () => dispatch(fetchDeviceInbox()),
        fetchDeviceOutbox: () => dispatch(fetchDeviceOutbox()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PeriodicFetcher);
