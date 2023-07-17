import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://books-vault-server.vercel.app/v1.0.0',
  }),
  tagTypes: ['deleteBook', 'updateList', 'updateBook', 'addReview'],
  endpoints: () => ({}),
});
