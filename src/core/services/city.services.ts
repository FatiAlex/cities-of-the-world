import { ICityFormDTO } from '../models/city.models';

export const getCities = async (): Promise<Response> => {
  return await fetch(`${process.env.CITY_API}`);
};

export const getCityById = async (id: number): Promise<Response> => {
  return await fetch(`${process.env.CITY_API}/${id}`);
};

export const postCity = async (city: ICityFormDTO): Promise<Response> => {
  return await fetch(`${process.env.CITY_API}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(city),
  });
};

export const putCity = async (
  id: number,
  city: ICityFormDTO,
): Promise<Response> => {
  return await fetch(`${process.env.CITY_API}/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(city),
  });
};

export const deleteCity = async (id: number): Promise<Response> => {
  return await fetch(`${process.env.CITY_API}/${id}`, {
    method: 'DELETE',
  });
};
