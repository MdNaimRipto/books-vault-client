import { api } from '../../api/apiSlice';

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTopBooks: builder.query({
      query: () => '/books/getTopBooks',
    }),
  }),
});

export const { useGetTopBooksQuery } = booksApi;
