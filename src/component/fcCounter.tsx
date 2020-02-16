import React, { FC, useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const FCCounter:FC = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count+1);
  };
  const decrement = () => {
    setCount(count-1);
  };
  return (
    <Box component="span" m={1}>
      <h3>FCカウンター</h3>
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

export default FCCounter;