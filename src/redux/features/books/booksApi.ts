import { IBooksFilterParams } from '../../../types/BookTypes';
import { api } from '../../api/apiSlice';

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: (data: IBooksFilterParams) => {
        const queryParameters = new URLSearchParams();
        if (data.searchTerm) {
          queryParameters.append('searchTerm', data.searchTerm);
        }
        if (data.selectedYear) {
          queryParameters.append('publicationYear', data.selectedYear);
        }
        if (data.selectedGenre) {
          queryParameters.append('genre', data.selectedGenre);
        }
        return `/books/getAllBooks?${queryParameters.toString()}`;
      },
    }),
    getTopBooks: builder.query({
      query: () => '/books/getTopBooks',
    }),
    getBooksByID: builder.query({
      query: (id) => ({
        url: `/books/getBooksByID/${id}`,
      }),
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetTopBooksQuery,
  useGetBooksByIDQuery,
} = booksApi;
