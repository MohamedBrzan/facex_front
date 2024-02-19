import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';
import Video from '../../Interfaces/Video/Video';

export const VideoApi = createApi({
  reducerPath: 'VideoApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_ROOT }),
  endpoints: (builder) => ({
    getVideos: builder.query<Video, string>({
      query: () => '/video',
    }),
  }),
});

export const { useGetVideosQuery } = VideoApi;
