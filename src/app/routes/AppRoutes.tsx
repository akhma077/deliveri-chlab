import { Routes, Route } from 'react-router-dom';
import { routePaths } from './routes';
import { Basket, Restaurant, RestaurantPage } from '../../pages';
import { MainLayout } from '../layout';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routePaths.home} element={<MainLayout />}>
        <Route path={''} element={<Restaurant />}></Route>
        <Route path={routePaths.restaraunt} element={<RestaurantPage />}></Route>
        <Route path={routePaths.basket} element={<Basket />}></Route>
      </Route>
    </Routes>
  );
};
