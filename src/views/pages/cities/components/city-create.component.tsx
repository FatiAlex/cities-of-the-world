import * as React from 'react';
import Modal from '../../../components/modal.component';
import { Button } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import CityForm from './city-form.component';
import { CityModel, ICityFormView } from '../../../../core/models/city.models';
import * as CityService from '../../../../core/services/city.services';
import * as CityAdapter from '../../../../core/adapters/city.adapter';
import { CitiesContext } from '../../../contexts/cities.context';
import useFetchByPutPostDeleteMethods from '../../../hooks/use-fetch-by-put-post-delete-methods.hook';
import Error from '../../../components/error.component';

const CityCreate = () => {
  // context
  const { fetchAllCities } = useContext(CitiesContext);

  // states
  const [city, setCity] = useState<ICityFormView>(new CityModel());
  const [formError, setFormError] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  // handlers
  const handleShow = () => setShow(!show);

  // custom hooks
  const {
    error,
    setError,
    fetchByPutPostDeleteMethods: createCity,
  } = useFetchByPutPostDeleteMethods(
    () =>
      CityService.postCity(CityAdapter.adaptCityFormViewToCityFormDTO(city)),
    fetchAllCities,
    handleShow,
    () => setCity(new CityModel()),
    () => setFormError(false),
  );

  // handlers
  const handleConfirm = () => {
    const notValid = Object.keys(city).find(
      (key: string) => key !== 'id' && city[key] === '',
    );
    if (notValid) {
      return setFormError(true);
    }
    return createCity();
  };

  // render
  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Create
      </Button>
      <Modal
        show={show}
        setShow={setShow}
        headerLabel="City"
        confirmLabel="Create"
        handleConfirm={handleConfirm}
        handleHide={() => {
          setShow(false);
          setFormError(false);
        }}
        showFooter
      >
        <CityForm city={city} setCity={setCity} formError={formError} />
      </Modal>
      <Error error={error} setError={setError} />
    </>
  );
};

export default CityCreate;
