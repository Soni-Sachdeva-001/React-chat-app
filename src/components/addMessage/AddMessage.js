import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from '../stateManagement/useInputState';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import './AddMessage.css';

const AddMessage = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState();

  return (
      <Grid container direction={'column'} justify={'center'} alignItems={'center'}>
        <form
          onSubmit={event => {
            event.preventDefault();

            saveTodo(value);
            reset();
          }}
        >
            <Box>
              <TextField
                variant="outlined"
                placeholder="Add message"
                margin="normal"
                onChange={onChange}
                value={value}
              />
            </Box>

            <Box mt={3} ml={9}>
              <Button
                  type={'submit'}
                  variant={'contained'}
                  id={'send-button'}
              >
                  Send
              </Button>
            </Box>

        </form>
      </Grid>
  );
};

export default AddMessage;
