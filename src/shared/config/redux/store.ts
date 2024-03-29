import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { filter, basket, user } from "./slices";

export const store = configureStore({
    reducer: {
        filter,
        basket,
        user,
    },
});

// типизация useSelector(state:<>)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// dispatch для запросов createAsyncThunk
export const useAppDispatch = () => useDispatch<AppDispatch>();
