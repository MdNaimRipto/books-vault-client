import { configureStore } from '@reduxjs/toolkit';
import { apiBooks } from './api/booksApiSlice';

const store = configureStore({
  reducer: {
    [apiBooks.reducerPath]: apiBooks.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiBooks.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
