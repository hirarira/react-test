import React, { FC } from 'react';
import FCCounter from './component/fcCounter'
import Counter from './containers/counter'

import './App.css';

const App:FC = () => {

  return (
    <div className="App">
      <header className="App-header">
        <FCCounter />
        <Counter />
      </header>
    </div>
  );
}

export default App;
