import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Coin from '../pages/Coin';
import Home from '../pages/Home';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Coin />} />
    </Routes>
  );
};

export default AppRoutes;
