import { useEffect } from 'react';
import { useGetNotificationsQuery } from '../../store/apis/Notifications';

const Notifications = () => {
  const { isFetching, isLoading, isSuccess, isUninitialized, isError, data } =
    useGetNotificationsQuery('');

  useEffect(() => {
    if (isFetching) console.log('fetching...');
    if (isLoading) console.log('loading...');
    if (isSuccess) console.log('success ✌️');
    if (isUninitialized) console.log('uninitialized 🤔');
    if (isError) console.log('error 🤔');
    console.log(data);

    document.body.style.setProperty('background-color', '#F4F2EE');
  }, [data, isError, isFetching, isLoading, isSuccess, isUninitialized]);
  return <div>Notifications</div>;
};

export default Notifications;
