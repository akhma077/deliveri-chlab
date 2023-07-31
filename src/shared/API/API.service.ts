import axios from 'axios';
import { api } from './config.json';
import { parseCookies } from 'nookies';

const { authToken } = parseCookies();

// Получение категорий
export const fetchCategories = async () => {
  const { data } = await axios.get(`${api}/categories`);
  return data;
};

// Автоизация
export const LoginAPI = async (user: any) => {
  const { data } = await axios({
    method: 'POST',
    url: `${api}/auth/login`,
    data: user,
    headers: { 'Content-Type': 'application/json' },
  });
  return data;
};
// Регистрация
export const RegisterAPI = async (user: any) => {
  const { data } = await axios({
    method: 'POST',
    url: `${api}/auth/register`,
    data: user,
    headers: { 'Content-Type': 'application/json' },
  });
  return data;
};

// Получение ресторанов
export const getAllRestaurants = async () => {
  const { data } = await axios.get(`${api}/restaraunts`);
  return data;
};
// Получение продуктов ресторана
export const getAllRestaurantProducts = async ({ queryKey }: any) => {
  const [_, id] = queryKey;
  const { data } = await axios.get(`${api}/products/${id}`);
  return data;
};

// Создание продукта
export const createProduct = async (product: any) => {
  const { data } = await axios({
    method: 'POST',
    url: `${api}/products`,
    data: product,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${authToken}`,
    },
  });
  return data;
};

// получение юзера
export const getUserData = async () => {
  const { data } = await axios({
    method: 'GET',
    url: `${api}/users/me`,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${authToken}`,
    },
  });

  return data;
};
