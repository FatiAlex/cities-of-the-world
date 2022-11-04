import * as React from 'react';
import { Form } from 'react-bootstrap';
import { ICityFormProps } from '../types/city-form.component.types';

const CityForm = (props: ICityFormProps) => {
  // props
  const { city, setCity } = props;

  // handlers
  const handleFormOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    property: keyof typeof city,
  ) => {
    setCity({ ...city, [property]: e.target.value });
  };

  // render
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Title *</Form.Label>
        <Form.Control
          type="text"
          required
          isInvalid={!city.title}
          value={city.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleFormOnChange(e, 'title')
          }
        />
        <Form.Control.Feedback type="invalid">
          Please enter a title.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={city.content}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleFormOnChange(e, 'content')
          }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Latitude</Form.Label>
        <Form.Control
          type="number"
          value={city.latitude}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleFormOnChange(e, 'latitude')
          }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Longitude</Form.Label>
        <Form.Control
          type="number"
          value={city.longitude}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleFormOnChange(e, 'longitude')
          }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          value={city.imageUrl}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleFormOnChange(e, 'imageUrl')
          }
        />
      </Form.Group>
    </Form>
  );
};

export default CityForm;
