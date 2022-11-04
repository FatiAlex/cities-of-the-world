import { ICityDetailView } from '../../../core/models/city.models';
import { IErrorView } from '../../../core/models/error.model';
import * as React from 'react';

export interface ICitiesContext {
  cities: ICityDetailView[];
  setCities: React.Dispatch<React.SetStateAction<ICityDetailView[]>>;
  loading: boolean;
  error: IErrorView;
  setError: React.Dispatch<React.SetStateAction<IErrorView>>;
  fetchAllCities: () => void;
}
