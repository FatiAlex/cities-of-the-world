import { useState } from 'react';
import * as ErrorAdapter from '../../core/adapters/error.adapter';
import {
  ErrorTypes,
  ErrorModel,
  IErrorView,
} from '../../core/models/error.model';

const useFetchByGetMethod = (getService, adaptDTOtoView, setEntity) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<IErrorView>(new ErrorModel());

  const fetchByGetMethod = () => {
    setLoading(true);

    getService()
      .then((response: Response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`${response.status}`);
      })
      .then((entities: object[] | object) => {
        if (Array.isArray(entities)) {
          const adaptedEntities = entities.map((entity: object) => {
            return adaptDTOtoView(entity);
          });
          setEntity(adaptedEntities);
        } else {
          setEntity(adaptDTOtoView(entities));
        }
        setLoading(false);
      })
      .catch((err: ErrorTypes) => {
        const adaptedError = ErrorAdapter.adaptErrorDTOToErrorView(err);
        setError(adaptedError);
        setLoading(false);
      });
  };

  return {
    loading,
    setLoading,
    error,
    setError,
    fetchByGetMethod,
  };
};

export default useFetchByGetMethod;
