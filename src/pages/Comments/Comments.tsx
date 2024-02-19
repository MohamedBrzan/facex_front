import { useEffect } from 'react';
import { useGetCommentsQuery } from '../../store/apis/Comments';

const Comments = () => {
  const { isFetching, isLoading, isSuccess, isUninitialized, isError, data } =
    useGetCommentsQuery('');

  useEffect(() => {
    if (isFetching) console.log('fetching...');
    if (isLoading) console.log('loading...');
    if (isSuccess) console.log('success ✌️');
    if (isUninitialized) console.log('uninitialized 🤔');
    if (isError) console.log('error 🤔');
    console.log(data);
  }, [data, isError, isFetching, isLoading, isSuccess, isUninitialized]);
  return <div>Comments</div>;
};

export default Comments;
