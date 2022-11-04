import * as React from 'react';
import Table from 'react-bootstrap/Table';
import { ICityDetailView } from '../../../../core/models/city.models';
import { useContext, useEffect } from 'react';
import { CitiesContext } from '../../../contexts/cities.context';
import CityEdit from './city-edit.component';
import CityDelete from './city-delete.component';
import CityDetail from './city-detail.component';
import Error from '../../../components/error.component';
import { Alert } from 'react-bootstrap';

const CitiesList = () => {
  // context
  const { cities, fetchAllCities, error, setError, setCities } =
    useContext(CitiesContext);

  // useEffects
  useEffect(() => {
    fetchAllCities();
  }, []);

  useEffect(() => {
    if (error.code) {
      setCities([]);
    }
  }, [error]);

  // render
  return (
    <div className="cities-list">
      {cities?.length > 0 && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {cities.map((city: ICityDetailView) => (
              <tr key={city.id}>
                <td>{city.id}</td>
                <td>{city.title}</td>
                <td>{city.content}</td>
                <td>{city.latitude}</td>
                <td>{city.longitude}</td>
                <td>{city.createdAt}</td>
                <td>{city.updateAt}</td>
                <td>
                  <div className="table__actions">
                    <CityDetail cityId={city.id} />
                    <CityEdit cityId={city.id} cityTitle={city.title} />
                    <CityDelete cityId={city.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {cities?.length === 0 && (
        <Alert variant="info">No cities added yet</Alert>
      )}
      <Error error={error} setError={setError} />
    </div>
  );
};

export default CitiesList;
