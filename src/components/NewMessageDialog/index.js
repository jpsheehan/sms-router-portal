import React, { Component } from 'react'
import PropTypes from 'prop-types';

import {
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
    TextField,
    Button,
} from '@material-ui/core';

import {
    Send as SendIcon
} from '@material-ui/icons';

class NewMessageDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: "",
            text: "",
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleNumberChange(event) {
        this.setState({
            number: event.target.value,
        });
    }

    handleTextChange(event) {
        this.setState({
            text: event.target.value,
        });
    }

    handleSubmit() {
        const { onSubmit } = this.props;
        onSubmit(this.state);
    }

    handleClose() {
        const { onClose } = this.props;
        onClose();
    }

    render() {
        const { open } = this.props;
        return (
            <Dialog
                open={open}
                onClose={this.handleClose}
            >
                <DialogTitle>
                    Send Message
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Send an SMS message to a phone:
                    </DialogContentText>
                    <TextField
                        label="Phone Number"
                        placeholder="027 123 4567"
                        value={this.state.number}
                        onChange={this.handleNumberChange}
                        fullWidth
                        autoFocus
                    />
                    <TextField
                        label="Message"
                        placeholder="Hello, World!"
                        value={this.state.text}
                        onChange={this.handleTextChange}
                        fullWidth
                    />
                    <DialogActions>
                        <Button onClick={this.handleClose}>
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit}>
                            Send <SendIcon />
                        </Button>
                    </DialogActions>
                </DialogContent>

            </Dialog>
        );
    }
}

NewMessageDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default NewMessageDialog;
