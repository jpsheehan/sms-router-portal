import React from 'react';

import {
    Typography,
    Toolbar,
    IconButton,
    withStyles,
} from '@material-ui/core';

import {
    Refresh as RefreshIcon,
} from '@material-ui/icons';

import MessageList from '../MessageList';

const styles = (theme) => ({
    spacer: {
        flex: '1 1 100%'
    },
});

class Inbox extends React.Component {

    constructor(props) {
        super(props);
        this.handleRefresh = this.handleRefresh.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleRefresh() {
        const { fetchDeviceInbox } = this.props;
        fetchDeviceInbox();
    }

    handleDelete(id) {
        const { doDeleteMessage } = this.props;
        doDeleteMessage(id);
    }

    render() {

        const { inbox, selectedId, classes } = this.props;

        return (
            <React.Fragment>
                <Toolbar>
                    <div>
                        <Typography variant='h6'>
                            Inbox
                        </Typography>
                    </div>
                    <div className={classes.spacer}></div>
                    <div>
                        <IconButton
                            disabled={selectedId ? false : true}
                            onClick={this.handleRefresh}
                        >
                            <RefreshIcon />
                        </IconButton>
                    </div>
                </Toolbar>
                <MessageList
                    messages={inbox}
                    direction="From"
                    canDelete={true}
                    onDelete={this.handleDelete}
                />
            </React.Fragment>
        );

    }

}

export default withStyles(styles)(Inbox);
