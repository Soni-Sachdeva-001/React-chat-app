import React from 'react';
import Typography from '@material-ui/core/Typography';
import useTodoState from "./components/stateManagement/useMessageState";
import AddMessage from "./components/addMessage/AddMessage";
import ViewMessages from "./components/viewMessage/ViewMessages";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const App = () => {
    const { messages, addMessages, deleteMessages } = useTodoState([]);

    return (
        <Grid container justify={'center'} alignItems={'center'} direction={'column'}>
            <Typography component="h5" variant="h4">
                Chat Box
            </Typography>
            <Box mt={4} >
                <AddMessage
                    saveTodo={messageText => {
                        const trimmedText = messageText.trim();

                        if (trimmedText.length > 0) {
                            addMessages(trimmedText);
                        }
                    }}
                />
            </Box>
            <Box mt={2}>
            <ViewMessages messages={messages} deleteMessages={deleteMessages} />
            </Box>
        </Grid>
    );
};

export default App;