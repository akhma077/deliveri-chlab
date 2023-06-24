import { Route, Routes } from "react-router-dom";
import { routePaths } from "./routes";
import { Restaurant, RestaurantPage } from "../../pages";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={routePaths.home} element={<Restaurant />}></Route>
            <Route
                path={routePaths.restaraunt}
                element={<RestaurantPage />}
            ></Route>
        </Routes>
    );
};
