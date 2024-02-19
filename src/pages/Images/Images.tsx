import { useEffect } from 'react';
import { useGetImagesQuery } from '../../store/apis/Images';

const Images = () => {
  const { isFetching, isLoading, isSuccess, isUninitialized, isError, data } =
    useGetImagesQuery('');

  useEffect(() => {
    if (isFetching) console.log('fetching...');
    if (isLoading) console.log('loading...');
    if (isSuccess) console.log('success ✌️');
    if (isUninitialized) console.log('uninitialized 🤔');
    if (isError) console.log('error 🤔');
    console.log(data);
  }, [data, isError, isFetching, isLoading, isSuccess, isUninitialized]);
  return <div>Images</div>;
};

export default Images;
