import { ICityFormDTO, ICityFormView } from '../models/city.models';

export const getCities = async (): Promise<Response> => {
  return await fetch('http://localhost:3000/api/v1/posts');
};

export const getCityById = async (id: number): Promise<Response> => {
  return await fetch(`http://localhost:3000/api/v1/posts/${id}`);
};

export const postCity = async (city: ICityFormDTO): Promise<Response> => {
  return await fetch(`http://localhost:3000/api/v1/posts`, {
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
  return await fetch(`http://localhost:3000/api/v1/posts/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(city),
  });
};

export const deleteCity = async (id: number): Promise<Response> => {
  return await fetch(`http://localhost:3000/api/v1/posts/${id}`, {
    method: 'DELETE',
  });
};
