import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';
import Notification from '../../Interfaces/Notification/Notification';

export const NotificationApi = createApi({
  reducerPath: 'NotificationApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_ROOT }),
  endpoints: (builder) => ({
    getNotifications: builder.query<Notification, string>({
      query: () => '/notification',
    }),
  }),
});

export const { useGetNotificationsQuery } = NotificationApi;
