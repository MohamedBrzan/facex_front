import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';
import User from '../../Interfaces/User/User';

export const UsersApi = createApi({
  reducerPath: 'UsersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${APIS_ROOT}user`,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User, string>({
      query: () => '/',
    }),
    sendFollow: builder.mutation({
      query: ({ ...data }) => ({
        method: 'PATCH',
        url: '/follow',
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        method: 'GET',
        url: '/logout',
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useSendFollowMutation,
  useLogoutMutation,
} = UsersApi;
