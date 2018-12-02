import React from 'react';

import {
    Typography,
    Toolbar,
    IconButton,
    withStyles,
} from '@material-ui/core';

import {
    Refresh as RefreshIcon,
    Add as AddIcon
} from '@material-ui/icons';

import MessageList from '../MessageList';
import NewMessageDialog from '../NewMessageDialog';

const styles = (theme) => ({
    spacer: {
        flex: '1 1 100%'
    },
});

class Outbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newMessageDialogOpened: false,
        };

        this.handleRefresh = this.handleRefresh.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleNewMessageDialogClose = this.handleNewMessageDialogClose.bind(this);
        this.handleNewMessageDialogSubmit = this.handleNewMessageDialogSubmit.bind(this);
    }

    handleRefresh() {
        const { fetchDeviceOutbox } = this.props;
        fetchDeviceOutbox();
    }

    handleAdd() {
        this.setState({
            newMessageDialogOpened: true
        })
    }

    handleNewMessageDialogClose() {
        this.setState({
            newMessageDialogOpened: false
        })
    }

    handleNewMessageDialogSubmit({number, text}) {
        const { doCreateMessage } = this.props;
        doCreateMessage(number, text);
        this.handleNewMessageDialogClose();
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
                            <AddIcon />
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
                <NewMessageDialog
                    open={this.state.newMessageDialogOpened}
                    onClose={this.handleNewMessageDialogClose}
                    onSubmit={this.handleNewMessageDialogSubmit}
                />
            </React.Fragment>
        );

    }

}

export default withStyles(styles)(Outbox);
