import * as DateUtil from '../utils/date.util';
import {
  ICityFormDTO,
  ICityFormView,
  ICityDetailDTO,
  ICityDetailView,
} from '../models/city.models';

const adaptCityDetailDTOToCityDetailView = (
  cityListDTO: ICityDetailDTO,
): ICityDetailView => {
  return {
    id: cityListDTO.id,
    title: cityListDTO.title,
    content: cityListDTO.content,
    longitude: cityListDTO.long,
    latitude: cityListDTO.lat,
    imageUrl: cityListDTO.image_url,
    createdAt: DateUtil.dateStringToLocalStringUtil(cityListDTO.created_at),
    updateAt: DateUtil.dateStringToLocalStringUtil(cityListDTO.updated_at),
  };
};

const adaptCityFormViewToCityFormDTO = (
  cityCUView: ICityFormView,
): ICityFormDTO => {
  return {
    id: cityCUView.id,
    title: cityCUView.title,
    content: cityCUView.content,
    long: cityCUView.longitude,
    lat: cityCUView.latitude,
    image_url: cityCUView.imageUrl,
  };
};

export { adaptCityDetailDTOToCityDetailView, adaptCityFormViewToCityFormDTO };
