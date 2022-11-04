import * as React from 'react';
import CitiesList from './components/cities-list.component';
import CityCreate from './components/city-create.component';
import { CitiesContextProvider } from '../../contexts/cities.context';

const CitiesPage = () => {
  // render
  return (
    <>
      <CitiesContextProvider>
        <div className="cities-page">
          <div className="cities-page__header">
            <h2>Cities</h2>
            <CityCreate />
          </div>
          <div className="cities-page__content">
            <CitiesList />
          </div>
        </div>
      </CitiesContextProvider>
    </>
  );
};

export default CitiesPage;
