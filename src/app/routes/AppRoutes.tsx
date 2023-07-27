import { Routes, Route } from 'react-router-dom';
import { routePaths } from './routes';
import {
  Basket,
  Restaurant,
  RestaurantAccount,
  RestaurantPage,
  CheckoutPage,
  Success,
} from '../../pages';
import { MainLayout } from '../layout';
import { useResetScroll } from '../../shared/hooks/useResetScroll';

export const AppRoutes = () => {
  // сброс скролла при каждом изменении location
  useResetScroll();
  return (
    <Routes>
      <Route path={routePaths.home} element={<MainLayout />}>
        <Route path={''} element={<Restaurant />}></Route>
        <Route path={routePaths.restaraunt} element={<RestaurantPage />}></Route>
        <Route path={routePaths.basket} element={<Basket />}></Route>
        <Route path={routePaths.personalAccount} element={<RestaurantAccount />}></Route>
        <Route path={routePaths.checkoutPage} element={<CheckoutPage />}></Route>
        <Route path={routePaths.success} element={<Success />}></Route>
      </Route>
    </Routes>
  );
};
