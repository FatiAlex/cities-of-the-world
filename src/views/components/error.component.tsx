import * as React from 'react';
import { Alert, Toast } from 'react-bootstrap';
import { ErrorModel } from '../../core/models/error.model';
import { IErrorProps } from './types/error.component.types';

const Error = (props: IErrorProps) => {
  // props
  const { error, setError } = props;

  // render
  return (
    <Toast
      onClose={() => setError(new ErrorModel())}
      show={!!error.code}
      delay={3000}
      autohide
    >
      <Alert variant="danger">{error.message}</Alert>
    </Toast>
  );
};

export default Error;
