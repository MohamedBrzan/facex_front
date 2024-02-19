import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';
import Ad from '../../Interfaces/Ad/Ad';

export const AdApi = createApi({
  reducerPath: 'AdApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_ROOT }),
  endpoints: (builder) => ({
    getAds: builder.query<Ad, string>({
      query: () => '/ad',
    }),
  }),
});

export const { useGetAdsQuery } = AdApi;
