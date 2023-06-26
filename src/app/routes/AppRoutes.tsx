import { Route, Routes } from 'react-router-dom';
import { routePaths } from './routes';
import { Restaurant, RestaurantPage } from '../../pages';
import { MainLayout } from '../layout';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routePaths.home} element={<MainLayout />}>
        <Route path={''} element={<Restaurant />}></Route>
        <Route path={routePaths.restaraunt} element={<RestaurantPage />}></Route>
      </Route>
    </Routes>
  );
};
