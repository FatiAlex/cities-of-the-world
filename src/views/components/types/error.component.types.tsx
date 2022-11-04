import * as React from 'react';
import { IErrorView } from '../../../core/models/error.model';

export interface IErrorProps {
  error: IErrorView;
  setError: React.Dispatch<React.SetStateAction<IErrorView>>;
}
