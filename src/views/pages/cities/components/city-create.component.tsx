import * as React from 'react';
import Modal from '../../../components/modal.component';
import { Button } from 'react-bootstrap';
import { useContext, useState } from 'react';
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
  );

  // handlers
  const handleConfirm = () => {
    createCity();
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
        showFooter
      >
        <CityForm city={city} setCity={setCity} />
      </Modal>
      <Error error={error} setError={setError} />
    </>
  );
};

export default CityCreate;
