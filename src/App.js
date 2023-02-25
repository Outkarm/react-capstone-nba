import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './pages/HomePage';
import InfoPage from './pages/InfoPage';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:teaminfo" element={<InfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
