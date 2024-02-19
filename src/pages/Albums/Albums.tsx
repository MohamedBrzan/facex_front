import { useEffect } from 'react';
import { useGetAlbumsQuery } from '../../store/apis/Albums';

const Albums = () => {
  const { isFetching, isLoading, isSuccess, isUninitialized, isError, data } =
    useGetAlbumsQuery('');

  useEffect(() => {
    if (isFetching) console.log('fetching...');
    if (isLoading) console.log('loading...');
    if (isSuccess) console.log('success ✌️');
    if (isUninitialized) console.log('uninitialized 🤔');
    if (isError) console.log('error 🤔');
    console.log(data);
  }, [data, isError, isFetching, isLoading, isSuccess, isUninitialized]);
  return <div>Albums</div>;
};

export default Albums;
