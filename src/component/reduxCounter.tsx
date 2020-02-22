import React, { FC, useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const ReduxCounter:FC = () => {
  const increment = () => {

  };
  const decrement = () => {

  };
  return (
    <Box component="span" m={1}>
      <h3>Reduxカウンター</h3>
      <h4>Count: </h4>
      <Button
        variant="contained"
        color="primary"
        onClick={increment}
      >
        INCREMENT
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={decrement}
      >
        DECREMENT
      </Button>
    </Box>
  );
}

export default ReduxCounter;