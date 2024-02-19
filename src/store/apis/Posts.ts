import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';
import Post from '../../Interfaces/Post/Post';
// import Expressions from '../../Types/Post/Expressions';

export const PostApi = createApi({
  reducerPath: 'PostApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${APIS_ROOT}post`,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post, string>({
      query: (sort) => (sort ? `?sort=${sort.toLowerCase()}` : '/'),
    }),
    getPost: builder.query<Post, string>({
      query: (id) => `/${id}`,
    }),
    uploadPost: builder.mutation({
      query: ({ ...data }) => ({
        method: 'POST',
        url: '/create',
        body: data,
      }),
    }),
    editPost: builder.mutation({
      query: ({ ...data }) => ({
        method: 'PATCH',
        url: '/update',
        body: data,
      }),
    }),
    togglePostExpression: builder.mutation({
      query: ({ ...data }) => ({
        method: 'PATCH',
        url: '/expressions/toggle',
        body: data,
      }),
    }),
    share: builder.mutation({
      query: ({ ...data }) => ({
        method: 'PATCH',
        url: '/share',
        body: data,
      }),
    }),
    save: builder.mutation({
      query: ({ ...data }) => ({
        method: 'PATCH',
        url: '/save',
        body: data,
      }),
    }),
    deletePost: builder.mutation({
      query: ({ ...data }) => ({
        method: 'DELETE',
        url: '/del',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useUploadPostMutation,
  useGetPostQuery,
  useEditPostMutation,
  useTogglePostExpressionMutation,
  useShareMutation,
  useSaveMutation,
  useDeletePostMutation,
} = PostApi;
