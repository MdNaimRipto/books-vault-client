import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5875/v1.0.0' }),
  tagTypes: ['deleteBook'],
  endpoints: () => ({}),
});
