import * as React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import CitiesPage from '../pages/cities/cities.page';
import NotFoundPage from '../pages/not-found/not-found.page';

const Router = () => {
  // render
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cities" element={<CitiesPage />} />
        <Route path="/" element={<Navigate to="/cities" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
