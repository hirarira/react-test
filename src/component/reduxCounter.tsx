import React, { FC } from 'react';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export interface CounterProps {
  count?: number,
  decrement?: () => void,
  increment?: () => void,
}

const ReduxCounter:FC<CounterProps> = ({
  count = 0,
  increment = () => undefined,
  decrement = () => undefined,
}) => {
  return (
    <Box component="span" m={1}>
      <h3>Reduxカウンター</h3>
      <h4>Count: {count}</h4>
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