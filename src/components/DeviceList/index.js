import React from 'react';
import PropTypes from 'prop-types';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    LinearProgress,
    Toolbar,
    IconButton,
    withStyles,
} from '@material-ui/core';

import {
    Refresh as RefreshIcon
} from '@material-ui/icons';

const styles = (theme) => ({
    spacer: {
        flex: '1 1 100%'
    },
    selected: {
        background: theme.palette.secondary.light
    }
});

class DeviceList extends React.Component {

    constructor(props) {
        super(props);
        this.handleRefresh = this.handleRefresh.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const { fetchAllDevices } = this.props;
        fetchAllDevices();
    }

    handleRefresh() {
        const { fetchAllDevices } = this.props;
        fetchAllDevices();
    }

    handleClick(id) {
        const { selectDevice } = this.props;
        selectDevice(id);
    }

    render() {
        const { devices, devicesFetching, classes, selectedId } = this.props;
        
        return (
            <React.Fragment>
                <Toolbar>
                    <div>
                        <Typography variant='h6'>
                            Devices
                        </Typography>
                    </div>
                    <div className={classes.spacer}></div>
                    <div>
                        <IconButton onClick={this.handleRefresh}>
                            <RefreshIcon />
                        </IconButton>
                    </div>
                </Toolbar>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            devicesFetching
                            ? <TableRow>
                                <TableCell>
                                    <LinearProgress variant='indeterminate' />
                                </TableCell>IDBDatabase
                            </TableRow>
                            : devices.map((device) => {
                                const { id, name } = device;
                                
                                return (
                                    <TableRow
                                        key={id}
                                        onClick={() => this.handleClick(id)}
                                        className={selectedId === id ? classes.selected : null}
                                    >
                                        <TableCell>
                                            {name}
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        }
                    </TableBody>
                </Table>
            </React.Fragment>
        );
    }
}

DeviceList.propTypes = {
    classes: PropTypes.object.isRequired,
    devices: PropTypes.array.isRequired,
    fetchAllDevices: PropTypes.func.isRequired,
    selectDevice: PropTypes.func.isRequired,
    selectedId: PropTypes.string.isRequired,
};

export default withStyles(styles)(DeviceList);