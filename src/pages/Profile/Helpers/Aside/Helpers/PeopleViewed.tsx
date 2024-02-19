import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import me from '../../../../../assets/me_opentowork.jpeg';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const PeopleViewed = () => {
  const data = [
    {
      id: 1,
      image: me,
      title: 'المدرسة - Almdrasa',
      subtitle: 'Company • E-Learning',
    },
    {
      id: 2,
      image: me,
      title: 'W3Schools.com',
      subtitle: 'Company • E-Learning',
    },
    {
      id: 3,
      image: me,
      title: 'Mohamed Mahmoud',
      subtitle: 'Company • E-Learning',
    },
  ];

  return (
    <section className='people_viewed'>
      <article className='head'>
        <div className='title'>
          <h5 className='head'>
            <small>People also viewed</small>
          </h5>
        </div>
      </article>{' '}
      <article className='viewed'>
        {data.map(({ image, title, subtitle }, i) => (
          <section key={i} className='feed_content'>
            <div className='feed'>
              <figure>
                <img src={image} alt={title} />
              </figure>

              <div className='info'>
                <div className='user'>
                  <h6 className='title'>{title}</h6>
                  <p className='subtitle'>
                    <small>{subtitle}</small>
                  </p>
                </div>
                <div className='follow_btn'>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faUserPlus} />
                  </div>
                  <span className='text'>follow</span>
                </div>
              </div>
            </div>
            {i < data.length - 1 && <hr />}
          </section>
        ))}
      </article>
      <hr className='down_hr' />
      <Link className='show_all_btn' to='/networks'>
        Show All
      </Link>
    </section>
  );
};

export default PeopleViewed;
