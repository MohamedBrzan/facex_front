import { Link } from 'react-router-dom';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../../../assets/google_logo.jpeg';

const JobsView = () => {
  const recommendation = [
    {
      id: 1,
      image,
      title: 'Senior Frontend Developer',
      subtitle: 'Techy Business Services',
      country: 'Egypt',
      work: 'Remote',
      time: '8 hours ago',
      type: 'Easy Apply',
    },
    {
      id: 2,
      image,
      title: 'Senior Frontend Developer',
      subtitle: 'Techy Business Services',
      country: 'Egypt',
      work: 'Remote',
      time: '8 hours ago',
      type: 'Easy Apply',
    },
    {
      id: 3,
      image,
      title: 'Senior Frontend Developer',
      subtitle: 'Techy Business Services',
      country: 'Egypt',
      work: 'Remote',
      time: '8 hours ago',
      type: 'Easy Apply',
    },
    {
      id: 4,
      image,
      title: 'Senior Frontend Developer',
      subtitle: 'Techy Business Services',
      country: 'Egypt',
      work: 'Remote',
      time: '8 hours ago',
      type: 'Easy Apply',
    },
    {
      id: 5,
      image,
      title: 'Senior Frontend Developer',
      subtitle: 'Techy Business Services',
      country: 'Egypt',
      work: 'Remote',
      time: '8 hours ago',
      type: 'Easy Apply',
    },
  ];

  return (
    <section className='jobs_view'>
      <article className='recommendation'>
        <div className='head'>
          <h5 className='title'>
            <small>Recommended for you</small>
          </h5>
          <p className='subtitle'>Based on your profile and search history</p>
        </div>
        {recommendation.map(
          ({ image, title, subtitle, country, work, time, type }, i) => (
            <section key={i} className='job_recommend'>
              <div className='data_info'>
                <div className='text_sec'>
                  <figure>
                    <img src={image} alt={title} />
                  </figure>
                  <div className='info'>
                    <h5>
                      <small>{title}</small>
                    </h5>
                    <p className='subtitle'>{subtitle}</p>
                    <div className='job_info'>
                      <span>{country}</span> . <span>({work})</span>
                    </div>
                    <div className='job_time'>
                      <span>{time}</span> . <span>{type}</span>
                    </div>
                  </div>
                </div>
                <div className='svg'>
                  <div className='eye'>
                    <FontAwesomeIcon icon={faEyeSlash} fontSize={20} />
                  </div>
                  <div className='bookmark'>
                    <FontAwesomeIcon icon={faBookmark} fontSize={20} />
                  </div>
                </div>
              </div>
              {i < recommendation.length - 1 && <hr />}
            </section>
          )
        )}
        <hr />
        <Link to='/job/recommendation' className='show_link'>
          Show all <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </article>
    </section>
  );
};

export default JobsView;
