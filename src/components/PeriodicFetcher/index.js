import React from 'react';
import PropTypes from 'prop-types';

import {
    LinearProgress
} from '@material-ui/core';

class PeriodicFetcher extends React.Component {

    constructor(props) {
        super(props);
        this.timer = null;
    }

    componentDidMount() {
        const { fetchDeviceInbox, fetchDeviceOutbox } = this.props;
        this.timer = setInterval(() => {
            const { selectedId } = this.props;
            if (selectedId) {
                fetchDeviceInbox();
                fetchDeviceOutbox();
            }
        }, this.props.timeout)
    }
    
    render() {
        const { selectedId, inboxFetching, outboxFetching } = this.props;

        let variant = 'determinate';

        if (selectedId) {
            if (inboxFetching || outboxFetching) {
                variant = 'indeterminate';
            }
        }

        return (
            <LinearProgress
                variant={variant}
                value={100}
                />
        );

    }

}

PeriodicFetcher.propTypes = {
    timeout: PropTypes.number.isRequired,
};

export default PeriodicFetcher;
