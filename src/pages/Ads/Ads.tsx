import { useEffect } from 'react';
import { useGetAdsQuery } from '../../store/apis/Ads';

const Ads = () => {
  const { isFetching, isLoading, isSuccess, isUninitialized, isError, data } =
    useGetAdsQuery('');

  useEffect(() => {
    if (isFetching) console.log('fetching...');
    if (isLoading) console.log('loading...');
    if (isSuccess) console.log('success ✌️');
    if (isUninitialized) console.log('uninitialized 🤔');
    if (isError) console.log('error 🤔');
    console.log(data);
  }, [data, isError, isFetching, isLoading, isSuccess, isUninitialized]);
  return <div>Ads</div>;
};

export default Ads;
