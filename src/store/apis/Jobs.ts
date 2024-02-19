import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Job from '../../Interfaces/Job/Job';
import APIS_ROOT from '../../constants/APIS_ROOT';

export const JobApi = createApi({
  reducerPath: 'JobApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_ROOT }),
  endpoints: (builder) => ({
    getJobs: builder.query<Job[], string>({
      query: () => '/',
    }),
  }),
});

export const { useGetJobsQuery } = JobApi;
