import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <h3>カウンター</h3>
      <Box component="span" m={1}>
        <Button variant="contained" color="primary">
          INCREMENT
        </Button>
        <Button variant="contained" color="secondary">
          DECREMENT
        </Button>
      </Box>
      </header>
    </div>
  );
}

export default App;
