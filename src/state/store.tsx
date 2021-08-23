import { configureStore } from '@reduxjs/toolkit';
import userStateSlice from './slices/userStateSlice';

export const reducers = {
  user: userStateSlice,
};

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
