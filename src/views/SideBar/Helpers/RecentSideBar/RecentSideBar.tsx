import { faHashtag, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const RecentSideBar = () => {
  return (
    <article className='recent_identity'>
      <small className='padding'>Recent</small>
      <section className='general'>
        <div className='padding item'>
          <FontAwesomeIcon icon={faPeopleGroup} />
          <small>Coaching Business</small>
        </div>
        <div className='padding item'>
          <FontAwesomeIcon icon={faHashtag} /> <small>شغل</small>
        </div>
      </section>
      <Link to='/groups'>
        <small className='padding'>Groups</small>
      </Link>
      <section className='group'>
        <div className='padding item'>
          <FontAwesomeIcon icon={faPeopleGroup} />
          <small>Coaching Business</small>
        </div>
        <div className='padding item'>
          <FontAwesomeIcon icon={faHashtag} /> <small>شغل</small>
        </div>
      </section>
      <Link to='/events'>
        <small className='padding'>Events</small>
      </Link>
      <section className='events'>
        <div className='padding item'>
          <FontAwesomeIcon icon={faPeopleGroup} />
          <small>Coaching Business</small>
        </div>
        <div className='padding item'>
          <FontAwesomeIcon icon={faHashtag} /> <small>شغل</small>
        </div>
      </section>
      <hr />

      <Link className='discover_btn' to='/my-networks/discover-hub'>
        Discover me
      </Link>
    </article>
  );
};

export default RecentSideBar;
