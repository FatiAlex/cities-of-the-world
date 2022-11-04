import * as React from 'react';
import * as CityService from '../../../../core/services/city.services';
import { BiEditAlt } from 'react-icons/bi';
import {
  CityModel,
  ICityFormView,
  ICityDetailView,
} from '../../../../core/models/city.models';
import { useContext, useState } from 'react';
import * as CityAdapter from '../../../../core/adapters/city.adapter';
import { CitiesContext } from '../../../contexts/cities.context';
import Modal from '../../../components/modal.component';
import CityForm from './city-form.component';
import { ICityEditProps } from '../types/city-edit.component.types';
import useFetchByPutPostDeleteMethods from '../../../hooks/use-fetch-by-put-post-delete-methods.hook';
import Error from '../../../components/error.component';

const CityEdit = (props: ICityEditProps) => {
  // props
  const { cityId, cityTitle } = props;

  // context
  const { cities, fetchAllCities } = useContext(CitiesContext);

  // states
  const [city, setCity] = useState<ICityFormView>(new CityModel());
  const [show, setShow] = useState<boolean>(false);

  // handlers
  const handleShow = () => setShow(!show);

  // custom hooks
  const {
    error,
    setError,
    fetchByPutPostDeleteMethods: editCity,
  } = useFetchByPutPostDeleteMethods(
    () =>
      CityService.putCity(
        city.id,
        CityAdapter.adaptCityFormViewToCityFormDTO(city),
      ),
    fetchAllCities,
    handleShow,
  );

  // handlers
  const handleOnConfirm = () => {
    const notValid = Object.keys(city).find(
      (key: string) => key !== 'id' && city[key] === '',
    );
    if (!notValid) {
      editCity();
    }
  };

  const handleEdit = () => {
    const city = cities.find((city: ICityDetailView) => city.id == cityId);
    setCity(city);
    handleShow();
  };

  // render
  return (
    <>
      <BiEditAlt size="1.2rem" onClick={handleEdit} />
      <Modal
        show={show}
        setShow={setShow}
        headerLabel={cityTitle}
        confirmLabel="Edit"
        handleConfirm={handleOnConfirm}
        showFooter
      >
        <CityForm city={city} setCity={setCity} />
      </Modal>
      <Error error={error} setError={setError} />
    </>
  );
};

export default CityEdit;
