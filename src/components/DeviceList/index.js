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
});

class DeviceList extends React.Component {

    constructor(props) {
        super(props);
        this.onRefreshHandler = this.onRefreshHandler.bind(this);
    }

    componentDidMount() {
        const { fetchAllDevices } = this.props;
        fetchAllDevices();
    }

    onRefreshHandler() {
        const { fetchAllDevices } = this.props;
        fetchAllDevices();
    }

    render() {
        const { devices, isFetching, classes } = this.props;
        
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
                        <IconButton onClick={this.onRefreshHandler}>
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
                            isFetching
                            ? <TableRow>
                                <TableCell>
                                    <LinearProgress variant='indeterminate' />
                                </TableCell>
                            </TableRow>
                            : devices.map((device) => {
                                const { id, name } = device;
                                
                                return (
                                    <TableRow key={id}>
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
};

export default withStyles(styles)(DeviceList);