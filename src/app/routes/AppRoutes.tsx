
import { Route, Routes } from "react-router-dom";
import { routePaths } from "./routes";
import { Basket, Restaurant, RestaurantPage } from "../../pages";
import { MainLayout } from "../layout";
import { useResetScroll } from "../../shared/hooks/useResetScroll";

export const AppRoutes = () => {
    useResetScroll();
    return (
        <Routes>
            <Route path={routePaths.home} element={<MainLayout />}>
                <Route path={""} element={<Restaurant />}></Route>
                <Route
                    path={routePaths.restaraunt}
                    element={<RestaurantPage />}
                ></Route>
                <Route path={routePaths.basket} element={<Basket />}></Route>
            </Route>
        </Routes>
    );

