import { configureStore } from '@reduxjs/toolkit';
import apartmentsSlice from './slices/apartmentsSlice';

export const store = configureStore({
  reducer: {
    apartments: apartmentsSlice,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
