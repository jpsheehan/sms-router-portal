// DeviceList/index.js
import { connect } from 'react-redux';
import DeviceList from '../../components/DeviceList';
import {
    fetchAllDevices,
    selectDeviceAndFetchBoxes,
} from '../../actions';

/**
 * Maps the redux state to the DeviceList Component's props.
 * 
 * @param {Object} state The redux state.
 * @param {Object} ownProps The current props of the DeviceList Component.
 * @return {Object} Returns an object containing updated props from the redux store.
 */
function mapStateToProps(state, ownProps) {
    const { devices, devicesFetching, id } = state.devices;
    return {
        devicesFetching,
        devices,
        selectedId: id
    };
}

/**
 * Maps the redux actions to the DeviceList Component's props.
 * 
 * @param {Object} dispatch The redux dispatch function.
 * @param {Object} ownProps The current props of the DeviceList Component.
 * @return {Object} Returns an object containing the actions to update the redux store.
 */
function mapDispatchToProps(dispatch, ownProps) {
    return {
        fetchAllDevices: () => dispatch(fetchAllDevices(dispatch)),
        selectDevice: (id) => dispatch(selectDeviceAndFetchBoxes(id)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeviceList);
