import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';
import Hashtag from '../../Interfaces/Hashtag/Hashtag';

export const HashtagApi = createApi({
  reducerPath: 'HashtagApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_ROOT }),
  endpoints: (builder) => ({
    getHashtags: builder.query<Hashtag, string>({
      query: () => '/hashtags',
    }),
  }),
});

export const { useGetHashtagsQuery } = HashtagApi;
