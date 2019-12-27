import React from 'react';

import './App.css';
import Routes from './Pages/Routes';
import TopBar from './Components/TopBar';

function App() {
  return (
    <div className='App'>
      <TopBar />
      <Routes />
    </div>
  );
}

export default App;
