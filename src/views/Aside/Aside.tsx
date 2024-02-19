import { faArrowRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Aside.scss';
import { Link } from 'react-router-dom';
import { useGetUsersQuery } from '../../store/apis/Users';
import { useSelector } from 'react-redux';
import FollowBtn from '../../components/FollowBtn/FollowBtn';
import UserImage from '../../constants/UserAvatar';
import Loading from '../../components/Loading/Loading';
import State from '../../types/store/AuthSliceState';
import Footer from '../Footer/Footer';

const Aside = () => {
  const { isLoading, data: users, refetch } = useGetUsersQuery('');
  const { user } = useSelector((state: State) => state.Auth);

  return (
    <aside>
      {isLoading ? (
        <Loading text='loading...' />
      ) : (
        <>
          <section className='add_feed'>
            <div className='title'>
              <div className='text'>Add to your feed</div>
              <div className='icon'>
                <FontAwesomeIcon icon={faInfoCircle} />
              </div>
            </div>
            <div className='feeds'>
              {users?.map(
                ({ _id, avatar, name, profession, followers }, i) =>
                  user?._id !== _id && (
                    <section key={i} className='feed'>
                      <figure>
                        <img src={UserImage(avatar)} alt={name?.first} />
                      </figure>

                      <div className='info'>
                        <div className='user'>
                          <h6 className='title'>
                            {`${name?.first} ${name?.last}`}
                          </h6>
                          <p className='subtitle'>
                            <small>{profession || 'Software Engineer'}</small>
                          </p>
                        </div>
                        <FollowBtn
                          condition={followers.indexOf(user?._id)}
                          following={_id}
                          refetch={refetch}
                        />
                      </div>
                    </section>
                  )
              )}
            </div>
            <Link to='/networks' className='recommendations'>
              View all recommendations <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </section>
          <div className='line'></div>
        </>
      )}
      <Footer />
    </aside>
  );
};

export default Aside;
