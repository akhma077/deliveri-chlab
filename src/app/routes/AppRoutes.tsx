import { Route, Routes } from 'react-router-dom';
import { routePaths } from './routes';
import { Restaurant, RestaurantPage } from '../../pages';
import { useResetScroll } from '../../shared/hooks/useResetScroll';

export const AppRoutes = () => {
  useResetScroll();
  return (
    <Routes>
      <Route path={routePaths.home} element={<Restaurant />}></Route>
      <Route path={routePaths.restaraunt} element={<RestaurantPage />}></Route>
    </Routes>
  );
};
