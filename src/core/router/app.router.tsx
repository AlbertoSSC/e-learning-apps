import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { switchRoutes } from './routes';

import { HomeScene, ActivitiesScene } from '@/scenes';

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<HomeScene />} />
        <Route path={switchRoutes.activities} element={<ActivitiesScene />} />
      </Routes>
    </Router>
  );
};
