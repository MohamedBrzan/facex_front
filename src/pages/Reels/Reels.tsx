import { useEffect } from 'react';
import { useGetReelsQuery } from '../../store/apis/Reels';

const Reels = () => {
  const { isFetching, isLoading, isSuccess, isUninitialized, isError, data } =
    useGetReelsQuery('');

  useEffect(() => {
    if (isFetching) console.log('fetching...');
    if (isLoading) console.log('loading...');
    if (isSuccess) console.log('success ✌️');
    if (isUninitialized) console.log('uninitialized 🤔');
    if (isError) console.log('error 🤔');
    console.log(data);
  }, [data, isError, isFetching, isLoading, isSuccess, isUninitialized]);
  return <div>Reels</div>;
};

export default Reels;
