import { useEffect } from 'react';
import { useGetBlogsQuery } from '../../store/apis/Blogs';

const Blogs = () => {
  const { isFetching, isLoading, isSuccess, isUninitialized, isError, data } =
    useGetBlogsQuery('');

  useEffect(() => {
    if (isFetching) console.log('fetching...');
    if (isLoading) console.log('loading...');
    if (isSuccess) console.log('success ✌️');
    if (isUninitialized) console.log('uninitialized 🤔');
    if (isError) console.log('error 🤔');
    console.log(data);
  }, [data, isError, isFetching, isLoading, isSuccess, isUninitialized]);
  return <div>Blogs</div>;
};

export default Blogs;
