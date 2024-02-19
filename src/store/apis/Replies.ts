import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';
import Reply from '../../Interfaces/Comment/Reply';

export const ReplyApi = createApi({
  reducerPath: 'ReplyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${APIS_ROOT}reply`,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getReplies: builder.query<Reply, string>({
      query: () => '',
    }),
    getReply: builder.query<Reply, string>({
      query: (id) => `/${id}`,
    }),
    uploadReply: builder.mutation({
      query: ({ ...data }) => ({
        method: 'POST',
        url: '/create',
        body: data,
      }),
    }),
    toggleReplyExpression: builder.mutation({
      query: ({ ...data }) => ({
        method: 'PATCH',
        url: '/expressions/toggle',
        body: data,
      }),
    }),
    editReply: builder.mutation({
      query: ({ ...data }) => ({
        method: 'PATCH',
        url: '/update',
        body: data,
      }),
    }),
    deleteReply: builder.mutation({
      query: ({ ...data }) => ({
        method: 'DELETE',
        url: '/del',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetRepliesQuery,
  useGetReplyQuery,
  useUploadReplyMutation,
  useEditReplyMutation,
  useToggleReplyExpressionMutation,
  useDeleteReplyMutation,
} = ReplyApi;
