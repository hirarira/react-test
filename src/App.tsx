import React, { FC, useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import './App.css';

const App:FC = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count+1);
  };
  const decrement = () => {
    setCount(count-1);
  };
  return (
    <div className="App">
      <header className="App-header">
      <h3>カウンター</h3>
      <h4>Count: {count}</h4>
      <Box component="span" m={1}>
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
      </header>
    </div>
  );
}

export default App;
