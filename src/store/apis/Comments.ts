import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';
import Comment from '../../Interfaces/Comment/Comment';

export const CommentApi = createApi({
  reducerPath: 'CommentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${APIS_ROOT}comment`,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getComments: builder.query<Comment, string>({
      query: () => '',
    }),
    getComment: builder.query<Comment, string>({
      query: (id) => `/${id}`,
    }),
    uploadComment: builder.mutation({
      query: ({ ...data }) => ({
        method: 'POST',
        url: '/create',
        body: data,
      }),
    }),
    editComment: builder.mutation({
      query: ({ ...data }) => ({
        method: 'PATCH',
        url: '/update',
        body: data,
      }),
    }),
    toggleCommentExpression: builder.mutation({
      query: ({ ...data }) => ({
        method: 'PATCH',
        url: '/expressions/toggle',
        body: data,
      }),
    }),
    deleteComment: builder.mutation({
      query: ({ ...data }) => ({
        method: 'DELETE',
        url: '/del',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useGetCommentQuery,
  useUploadCommentMutation,
  useEditCommentMutation,
  useToggleCommentExpressionMutation,
  useDeleteCommentMutation,
} = CommentApi;
