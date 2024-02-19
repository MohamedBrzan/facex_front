import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserCover from '../../../../constants/UserCover';
import UserAvatar from '../../../../constants/UserAvatar';
import State from '../../../../types/store/AuthSliceState';

const FeedSideBar = () => {
  const { user } = useSelector((state: State) => state.Auth);
  return (
    <article className='feed_identity'>
      <figure className='cover'>
        <img className='cover' src={UserCover(user.cover)} alt='User Cover' />
      </figure>
      <figure className='me'>
        <img className='me' src={UserAvatar(user.avatar)} alt='User Photo' />
      </figure>
      <div className='user_info'>
        <h6 className='name'>{`${user?.name?.first} ${user?.name?.last}`}</h6>
        <p className='title text-center'>
          <small>{user?.profession || 'Software Engineer'}</small>
        </p>
      </div>
      <hr />
      <Link to='/analytics' className='padding analysis'>
        <b>
          <small>View all analytics</small>
        </b>
      </Link>
      <hr />
      <Link to='/my-items' className='padding items'>
        <FontAwesomeIcon icon={faBookmark} />

        <small>My items</small>
      </Link>
    </article>
  );
};

export default FeedSideBar;
