import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BoardPage from './components/BoardPage';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Signup from './components/Signup'

const App = () => {
  return (
    <Routes>
      <Route path="/board" element={<BoardPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default App;
