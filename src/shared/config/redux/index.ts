import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import filter from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    filter,
  },
});

// типизация useSelector(state:<>)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// dispatch для запросов createAsyncThunk
export const useAppDispatch = () => useDispatch<AppDispatch>();
