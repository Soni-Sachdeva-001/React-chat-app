import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';

const ViewMessages = ({ messages, deleteMessages }) => (
    <Grid
        container
        justify={'center'}
        alignItems={'center'}
    >
      <List>
        {messages.map((messages, index) => (
          <ListItem key={index.toString()} dense button>
            <ListItemText primary={messages} />
            <ListItemSecondaryAction>
              <IconButton
                aria-label="Delete"
                onClick={() => {
                  deleteMessages(index);
                }}
              >
                  <CloseIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Grid>
);

export default ViewMessages;
