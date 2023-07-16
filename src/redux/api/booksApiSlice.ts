import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiBooks = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5875/v1.0.0/books' }),
  tagTypes: ['books'],
  endpoints: () => ({}),
});