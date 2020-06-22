import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from '../stateManagement/useInputState';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import styled from "styled-components";

const AddMessage = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState();

  const Button = styled.button`
     variant: contained;
     background-color:darkblue;
     color:white;
     font-size: 1em;
     margin-left: 5em;
     margin-top: 2em;
     padding: 0.25em 1em;
     border: none;
` ;

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

            <Box >
              <Button
                  type={'submit'}
              >
                  Send
              </Button>
            </Box>

        </form>
      </Grid>
  );
};

export default AddMessage;
