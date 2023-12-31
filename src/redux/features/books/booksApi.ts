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
      providesTags: ['deleteBook', 'updateList'],
    }),
    getTopBooks: builder.query({
      query: () => '/books/getTopBooks',
    }),
    getBooksByID: builder.query({
      query: (id) => ({
        url: `/books/getBooksByID/${id}`,
      }),
      providesTags: ['updateBook', 'addReview'],
    }),
    createBook: builder.mutation({
      query: ({ data }) => ({
        url: `/books/createNewBook`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['updateList'],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/updateBook/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['updateBook'],
    }),
    addReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/addReview/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['addReview'],
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
  useCreateBookMutation,
  useUpdateBookMutation,
  useAddReviewMutation,
  useDeleteBookMutation,
} = booksApi;
