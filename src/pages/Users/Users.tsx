import { useEffect } from 'react';
import { useGetUsersQuery } from '../../store/apis/Users';
import './Users.scss';

const Users = () => {
  const { isFetching, isLoading, isSuccess, isUninitialized, isError, data } =
    useGetUsersQuery('');

  useEffect(() => {
    if (isFetching) console.log('fetching...');
    if (isLoading) console.log('loading...');
    if (isSuccess) console.log('success ✌️');
    if (isUninitialized) console.log('uninitialized 🤔');
    if (isError) console.log('error 🤔');
    console.log(data);
  }, [data, isError, isFetching, isLoading, isSuccess, isUninitialized]);
  return <section className='user'>User</section>;
};

export default Users;
