import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import {
  faBookmark,
  faCheck,
  faEdit,
  faFile,
  faGear,
  faPlay,
  faSliders,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const LeftAside = () => {
  return (
    <aside className='left_aside'>
      <div className='links'>
        <Link to='/jobs'>
          <div className='svg'>
            <FontAwesomeIcon icon={faBookmark} fontSize={20} />
          </div>
          <div className='text'>
            <small>My Jobs</small>
          </div>
        </Link>
        <Link to='/jobs'>
          <FontAwesomeIcon icon={faSliders} fontSize={20} />
          <span className='text'>
            <small>Preferences</small>
          </span>
        </Link>
        <Link to='/jobs'>
          <FontAwesomeIcon icon={faCheck} fontSize={20} />
          <span className='text'>
            <small>Demonstrate skills</small>
          </span>
        </Link>
        <Link to='/jobs'>
          <FontAwesomeIcon icon={faFile} fontSize={20} />
          <span className='text'>
            <small>Interview prep</small>
          </span>
        </Link>
        <Link to='/jobs'>
          <FontAwesomeIcon icon={faFileAlt} fontSize={20} />
          <span className='text'>
            <small>Resume Builder</small>
          </span>
        </Link>
        <Link to='/jobs'>
          <FontAwesomeIcon icon={faPlay} fontSize={20} />
          <span className='text'>
            <small>Job seeker guidance</small>
          </span>
        </Link>
        <Link to='/jobs'>
          <FontAwesomeIcon icon={faGear} fontSize={20} />
          <span className='text'>
            <small>Application settings</small>
          </span>
        </Link>
      </div>
      <div className='post_job'>
        <Link to='/create/job' className='create_btn'>
          <FontAwesomeIcon icon={faEdit} /> <span>Post a free job</span>
        </Link>
      </div>
    </aside>
  );
};

export default LeftAside;
