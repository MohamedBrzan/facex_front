import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';
import Reel from '../../Interfaces/Reel/Reel';

export const ReelApi = createApi({
  reducerPath: 'ReelApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_ROOT }),
  endpoints: (builder) => ({
    getReels: builder.query<Reel, string>({
      query: () => '/reel',
    }),
  }),
});

export const { useGetReelsQuery } = ReelApi;
