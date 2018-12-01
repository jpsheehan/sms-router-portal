import React from 'react';
import PropTypes from 'prop-types';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    IconButton,
} from '@material-ui/core';

import {
    Delete as DeleteIcon
} from '@material-ui/icons';

function MessageList(props) {

    const { direction, messages, canDelete, onDelete } = props;

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        {direction}
                    </TableCell>
                    <TableCell>
                        Message
                    </TableCell>
                    {
                        canDelete
                        ? (
                            <TableCell>Actions</TableCell>
                        ) : null
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    messages.map(message => {

                        const { id, number, text } = message;

                        return (
                            <TableRow key={id}>
                                <TableCell>
                                    {number}
                                </TableCell>
                                <TableCell>
                                    <Typography noWrap>
                                        {text}
                                    </Typography>
                                </TableCell>
                                {
                                    canDelete
                                    ? (
                                        <TableCell>
                                            <IconButton onClick={() => onDelete(id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    ) : null
                                }
                            </TableRow>
                        );

                    })
                }
            </TableBody>
        </Table>
    );

}

MessageList.propTypes = {
    direction: PropTypes.string.isRequired,
    messages: PropTypes.array.isRequired,
    canDelete: PropTypes.bool,
    onDelete: PropTypes.func
};

MessageList.defaultProps = {
    canDelete: false,
};

export default MessageList;