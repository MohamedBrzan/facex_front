import { useEffect } from 'react';
import { useGetHashtagsQuery } from '../../store/apis/Hashtags';

const Hashtags = () => {
  const { isFetching, isLoading, isSuccess, isUninitialized, isError, data } =
    useGetHashtagsQuery('');

  useEffect(() => {
    if (isFetching) console.log('fetching...');
    if (isLoading) console.log('loading...');
    if (isSuccess) console.log('success ✌️');
    if (isUninitialized) console.log('uninitialized 🤔');
    if (isError) console.log('error 🤔');
    console.log(data);
  }, [data, isError, isFetching, isLoading, isSuccess, isUninitialized]);
  return <div>Hashtags</div>;
};

export default Hashtags;
