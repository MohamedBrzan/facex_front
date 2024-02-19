import { faArrowRight, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Analytics = () => {
  return (
    <section className='analytics'>
      <div className='analytics_link'>
        <Link to='/analytics'>
          <h6 className='head'>Analytics & Tools</h6>
          <p className='tail'>
            <small>Post impressions past 7 days 3 </small>{' '}
            <span className='degree'>
              <FontAwesomeIcon icon={faCaretUp} />
              <span>90%</span>
            </span>
          </p>
        </Link>
      </div>
      <Link to='/analytics' className='arrow'>
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </section>
  );
};

export default Analytics;
