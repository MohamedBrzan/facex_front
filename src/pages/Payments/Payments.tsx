import { useEffect } from 'react';
import { useGetPaymentsQuery } from '../../store/apis/Payments';

const Payments = () => {
  const { isFetching, isLoading, isSuccess, isUninitialized, isError, data } =
    useGetPaymentsQuery('');

  useEffect(() => {
    if (isFetching) console.log('fetching...');
    if (isLoading) console.log('loading...');
    if (isSuccess) console.log('success ✌️');
    if (isUninitialized) console.log('uninitialized 🤔');
    if (isError) console.log('error 🤔');
    console.log(data);
  }, [data, isError, isFetching, isLoading, isSuccess, isUninitialized]);
  return <div>Payments</div>;
};

export default Payments;
