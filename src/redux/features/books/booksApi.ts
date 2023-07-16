import { IBooksFilterParams } from '../../../types/BookTypes';
import { apiBooks } from '../../api/booksApiSlice';

const booksApi = apiBooks.injectEndpoints({
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
        return `/getAllBooks?${queryParameters.toString()}`;
      },
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
