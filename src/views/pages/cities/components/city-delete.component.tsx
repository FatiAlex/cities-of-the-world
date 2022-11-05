import React, { useContext } from 'react';
import * as CityService from '../../../../core/services/city.services';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { CitiesContext } from '../../../contexts/cities.context';
import { ICityDeleteProps } from '../types/city-delete.component.types';
import { ErrorTypes } from '../../../../core/models/error.model';
import * as ErrorAdapter from '../../../../core/adapters/error.adapter';
import useFetchByPutPostDeleteMethods from '../../../hooks/use-fetch-by-put-post-delete-methods.hook';
import useFetchByGetMethod from '../../../hooks/use-fetch-by-get-method.hook';
import * as CityAdapter from '../../../../core/adapters/city.adapter';
import Error from '../../../components/error.component';

const CityDelete = (props: ICityDeleteProps) => {
  // props
  const { cityId } = props;

  // context
  const { fetchAllCities } = useContext(CitiesContext);

  // custom hooks
  const {
    error,
    setError,
    fetchByPutPostDeleteMethods: deleteCity,
  } = useFetchByPutPostDeleteMethods(
    () => CityService.deleteCity(cityId),
    fetchAllCities,
  );

  // handlers
  const handleDelete = () => {
    deleteCity();
  };

  // render
  return (
    <>
      <RiDeleteBin5Line size="1.2rem" onClick={handleDelete} />
      <Error error={error} setError={setError} />
    </>
  );
};

export default CityDelete;
