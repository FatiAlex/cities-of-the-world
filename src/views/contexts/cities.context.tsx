import React, { createContext, useState, useEffect } from 'react';
import { ICityDetailView } from '../../core/models/city.models';
import { ICitiesContext } from './types/cities.context.types';
import useFetchByGetMethod from '../hooks/use-fetch-by-get-method.hook';
import * as CityService from '../../core/services/city.services';
import * as CityAdapter from '../../core/adapters/city.adapter';

const CitiesContext = createContext<ICitiesContext | null>(null);

const CitiesContextProvider = ({ children }) => {
  const [cities, setCities] = useState<ICityDetailView[]>(null);

  const { fetchByGetMethod, loading, error, setError } = useFetchByGetMethod(
    CityService.getCities,
    CityAdapter.adaptCityDetailDTOToCityDetailView,
    setCities,
  );

  const value: ICitiesContext = {
    cities,
    loading,
    error,
    setError,
    setCities,
    fetchAllCities: fetchByGetMethod,
  };

  return (
    <CitiesContext.Provider value={value}>{children}</CitiesContext.Provider>
  );
};

export { CitiesContext, CitiesContextProvider };
