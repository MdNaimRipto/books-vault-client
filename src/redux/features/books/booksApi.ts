import { apiBooks } from '../../api/booksApiSlice';

const booksApi = apiBooks.injectEndpoints({
  endpoints: (builder) => ({
    getTopBooks: builder.query({
      query: () => '/getTopBooks',
    }),
    getBooksByID: builder.query({
      query: (id) => ({
        url: `/getBooksByID/${id}`,
      }),
    }),
  }),
});

export const { useGetTopBooksQuery, useGetBooksByIDQuery } = booksApi;
