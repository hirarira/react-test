import React, { FC } from 'react';
import FCCounter from './component/fcCounter'

import './App.css';

const App:FC = () => {

  return (
    <div className="App">
      <header className="App-header">
        <FCCounter />
      </header>
    </div>
  );
}

export default App;
