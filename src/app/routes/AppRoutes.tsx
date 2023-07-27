
import { Routes, Route } from 'react-router-dom';
import { routePaths } from './routes';
import {
  Basket,
  Restaurant,
  RestaurantAccount,
  RestaurantPage,
  CheckoutPage,
  Success,CreateProduct,Login,
    Register,
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
        <Route path={routePaths.login} element={<Login />}></Route>
                <Route
                    path={routePaths.register}
                    element={<Register />}
                ></Route>
                <Route
                    path={routePaths.createProduct}
                    element={<CreateProduct />}
                ></Route>
      </Route>
    </Routes>
  );
};
