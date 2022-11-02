import * as React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import CitiesListPage from './pages/cities-list/cities-list.page';
import NotFoundPage from './pages/not-found/not-found.page';
import CityDetailPage from './pages/city-detail/city-detail.page';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CitiesListPage />} />
        <Route path="/cities">
          <Route index element={<CitiesListPage />} />
          <Route path=":cityId" element={<CityDetailPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
