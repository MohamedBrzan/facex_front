import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import image from '../../../assets/cover.jpeg';
import Footer from '../../../views/Footer/Footer';

const RightAside = () => {
  return (
    <aside className='right_aside'>
      <section className='job_seeker'>
        <article className='head'>
          <h5 className='title'>
            <small>Job Seeker Guidance</small>
          </h5>
          <p className='subtitle'>
            <small>Recommended based on your activity </small>
          </p>
        </article>
        <article className='middle'>
          <h6 className='title'>
            <small>I want to improve my resume</small>
          </h6>
          <figure>
            <img src={image} alt='I want to improve my resume image' />
          </figure>
        </article>
        <article className='last'>
          <p className='subtitle'>
            <small>
              Explore our curated guide of expert-led courses, such as how to
              improve your resume and grow your network, to help you land your
              next opportunity.
            </small>
          </p>
          <Link to='/job' className='show_more'>
            Show more <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </article>
      </section>
      <Footer />
    </aside>
  );
};

export default RightAside;
