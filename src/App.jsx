import React from 'react';
import { DistributorProvider } from './context/DistributorContext';
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <DistributorProvider>
      <Home />
    </DistributorProvider>
  );
};

export default App;
