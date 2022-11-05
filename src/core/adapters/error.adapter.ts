import { ErrorTypes, IErrorView } from '../models/error.model';

export const adaptErrorDTOToErrorView = (
  errorResponse: ErrorTypes,
): IErrorView => {
  // setters
  const setCode = (): number | null => {
    if ('message' in errorResponse) {
      return Number(errorResponse.message);
    }
    if ('status' in errorResponse) {
      return errorResponse.status;
    }
    return null;
  };

  const setMessage = (): string => {
    if ('message' in errorResponse) {
      switch (Number(errorResponse.message)) {
        case 404:
          return 'Sorry! Not found';
        default:
          return 'Oops! Something went wrong';
      }
    }
    return errorResponse.statusText;
  };

  // IErrorModel
  return {
    code: setCode(),
    message: setMessage(),
  };
};
