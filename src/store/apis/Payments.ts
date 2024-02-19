import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIS_ROOT from '../../constants/APIS_ROOT';
import Payment from '../../Interfaces/Payment/Payment';

export const PaymentApi = createApi({
  reducerPath: 'PaymentApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_ROOT }),
  endpoints: (builder) => ({
    getPayments: builder.query<Payment, string>({
      query: () => '/payment',
    }),
  }),
});

export const { useGetPaymentsQuery } = PaymentApi;
