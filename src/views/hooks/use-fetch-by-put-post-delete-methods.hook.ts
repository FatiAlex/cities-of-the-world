import { useState } from 'react';
import * as ErrorAdapter from '../../core/adapters/error.adapter';
import {
  ErrorTypes,
  ErrorModel,
  IErrorView,
} from '../../core/models/error.model';

const useFetchByPutPostDeleteMethods = (getService, ...actions) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<IErrorView>(new ErrorModel());

  const fetchByPutPostDeleteMethods = () => {
    setLoading(true);

    getService()
      .then((response: Response) => {
        if (response.ok) {
          return actions.map((action) => action());
        }
        throw new Error(`${response.status}`);
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
    fetchByPutPostDeleteMethods,
  };
};

export default useFetchByPutPostDeleteMethods;
