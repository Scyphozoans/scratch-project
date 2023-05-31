import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BoardPage from './components/BoardPage';
import Login from './components/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/board" element={<BoardPage />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default App;
