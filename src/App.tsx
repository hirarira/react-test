import React, { FC } from 'react';
import FCCounter from './component/fcCounter'
import ReduxCounter from './containers/reduxCounter'

import './App.css';

const App:FC = () => {

  return (
    <div className="App">
      <header className="App-header">
        <FCCounter />
        <ReduxCounter />
      </header>
    </div>
  );
}

export default App;
