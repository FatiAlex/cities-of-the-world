import * as React from 'react';
import { ICityFormView } from '../../../../core/models/city.models';

export interface ICityFormProps {
  city: ICityFormView;
  setCity: React.Dispatch<React.SetStateAction<ICityFormView>>;
  formError: boolean;
}
