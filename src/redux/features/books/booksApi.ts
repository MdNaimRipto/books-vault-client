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
      providesTags: ['deleteBook'],
    }),
    getTopBooks: builder.query({
      query: () => '/books/getTopBooks',
    }),
    getBooksByID: builder.query({
      query: (id) => ({
        url: `/books/getBooksByID/${id}`,
      }),
    }),
    deleteBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/deleteBook/${id}`,
        method: 'DELETE',
        body: data,
      }),
      invalidatesTags: ['deleteBook'],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetTopBooksQuery,
  useGetBooksByIDQuery,
  useDeleteBookMutation,
} = booksApi;
