import * as React from 'react';
import { Alert, Form } from 'react-bootstrap';
import { ICityFormProps } from '../types/city-form.component.types';
import { validateNumberField } from '../../../../core/utils/number.util';

const CityForm = (props: ICityFormProps) => {
  // props
  const { city, setCity, formError } = props;

  // handlers
  const handleFormOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    property: keyof typeof city,
  ) => {
    setCity({ ...city, [property]: e.target.value });
  };

  // render
  return (
    <>
      {formError && <Alert variant="danger">Missing required fields</Alert>}
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title *</Form.Label>
          <Form.Control
            type="text"
            required
            value={city.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormOnChange(e, 'title')
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Content *</Form.Label>
          <Form.Control
            as="textarea"
            required
            rows={3}
            value={city.content}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormOnChange(e, 'content')
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Latitude *</Form.Label>
          <Form.Control
            type="text"
            required
            value={city.latitude}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const isNumber = validateNumberField(e.target.value);
              isNumber && handleFormOnChange(e, 'latitude');
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Longitude *</Form.Label>
          <Form.Control
            type="text"
            required
            value={city.longitude}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const isNumber = validateNumberField(e.target.value);
              isNumber && handleFormOnChange(e, 'longitude');
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image URL *</Form.Label>
          <Form.Control
            type="text"
            required
            value={city.imageUrl}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormOnChange(e, 'imageUrl')
            }
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default CityForm;
