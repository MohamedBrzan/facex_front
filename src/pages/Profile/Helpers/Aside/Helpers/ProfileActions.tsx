import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfileActions = () => {
  return (
    <section className='profile_actions'>
      <div className='profile_lang'>
        <div className='title'>
          <h5>
            <small>Profile Language</small>
          </h5>
          <div className='edit_icon'>
            <FontAwesomeIcon icon={faPencil} />
          </div>
        </div>
        <p className='lang'>English</p>
      </div>
      <hr />
      <div className='profile_url'>
        {' '}
        <div className='title'>
          <h5>
            <small>Public Profile & URL</small>
          </h5>
          <div className='edit_icon'>
            <FontAwesomeIcon icon={faPencil} />
          </div>
        </div>
        <p className='lang'>www.linkedin.com/in/mohamed-brzan-01966518a</p>
      </div>
    </section>
  );
};

export default ProfileActions;
