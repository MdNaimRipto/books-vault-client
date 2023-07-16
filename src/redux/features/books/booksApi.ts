import { apiBooks } from '../../api/booksApiSlice';

const booksApi = apiBooks.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => '/getAllBooks',
    }),
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

export const {
  useGetAllBooksQuery,
  useGetTopBooksQuery,
  useGetBooksByIDQuery,
} = booksApi;
