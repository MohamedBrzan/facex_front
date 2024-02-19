import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';

export const AuthenticationApi = createApi({
  reducerPath: 'AuthenticationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${APIS_ROOT}user`,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ ...data }) => ({
        method: 'POST',
        url: '/register',
        body: data,
      }),
    }),
    signIn: builder.mutation({
      query: ({ ...data }) => ({
        method: 'POST',
        url: '/login',
        body: data,
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = AuthenticationApi;
