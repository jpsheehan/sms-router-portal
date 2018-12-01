import React from 'react';

import {
    Typography,
    Toolbar,
    IconButton,
    withStyles,
} from '@material-ui/core';

import {
    Refresh as RefreshIcon,
    Send as SendIcon
} from '@material-ui/icons';

import MessageList from '../MessageList';

const styles = (theme) => ({
    spacer: {
        flex: '1 1 100%'
    },
});

class Outbox extends React.Component {

    constructor(props) {
        super(props);
        this.handleRefresh = this.handleRefresh.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleRefresh() {
        const { fetchDeviceOutbox } = this.props;
        fetchDeviceOutbox();
    }

    handleAdd() {
        const { doCreateMessage } = this.props;
        doCreateMessage('0273374547', 'test')
    }

    render() {

        const { outbox, selectedId, classes } = this.props;

        return (
            <React.Fragment>
                <Toolbar>
                    <div>
                        <Typography variant='h6'>
                            Outbox
                        </Typography>
                    </div>
                    <div className={classes.spacer}></div>
                    <div>
                        <IconButton
                            disabled={selectedId ? false : true}
                            onClick={this.handleAdd}
                        >
                            <SendIcon />
                        </IconButton>
                    </div>
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
                    messages={outbox}
                    direction="To"
                />
            </React.Fragment>
        );

    }

}

export default withStyles(styles)(Outbox);
