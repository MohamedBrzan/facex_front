import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';
import Image from '../../Interfaces/Image/Image';

export const ImageApi = createApi({
  reducerPath: 'ImageApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_ROOT }),
  endpoints: (builder) => ({
    getImages: builder.query<Image, string>({
      query: () => '/image',
    }),
  }),
});

export const { useGetImagesQuery } = ImageApi;
