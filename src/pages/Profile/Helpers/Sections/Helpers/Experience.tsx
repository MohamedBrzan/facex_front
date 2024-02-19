import youtubeLogo from '../../../../../assets/youtube_logo.jpeg';
import googleLogo from '../../../../../assets/google_logo.jpeg';
import positionLogo from '../../../../../assets/position_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  const data = [
    {
      id: 1,
      title: 'Frontend Developer',
      position: 'Freelance',
      image: positionLogo,
      date: { start: 'Aug 2021', end: 'Present' },
      skills: [
        'REST APIs',
        'HTML',
        'Webpack',
        'Cascading Style Sheets (CSS)',
        'MUI',
        'SASS',
        'Bootstrap',
        'HTML5',
        'GitHub',
        'Express.js',
        'MongoDB',
        'Node.js',
        'Redux.js',
        'React.js',
        'Javascript',
        'Responsive Web Design',
      ],
    },
    {
      id: 2,
      title: 'Content Creator',
      position: 'Youtube . Self-employed',
      image: youtubeLogo,
      date: { start: 'Aug 2021', end: 'Present' },
      skills: [],
      link: 'https://www.youtube.youtube',
    },
    {
      id: 3,
      title: 'Web Developer | MERN',
      position: 'Freelancer . Freelance',
      image: googleLogo,
      date: { start: 'Aug 2021', end: 'Present' },
      skills: [
        'REST APIs',
        'HTML',
        'Webpack',
        'Cascading Style Sheets (CSS)',
        'MUI',
        'SASS',
        'Bootstrap',
        'HTML5',
        'GitHub',
        'Express.js',
        'MongoDB',
        'Node.js',
        'Redux.js',
        'React.js',
        'Javascript',
        'Responsive Web Design',
      ],
    },
  ];
  return (
    <section className='experiences'>
      <article className='head'>
        <div className='title'>
          <h4 className='head'>
            <small>Experiences</small>
          </h4>
        </div>
        <div className='actions'>
          <div className='edit_icon'>
            <FontAwesomeIcon icon={faPencil} />
          </div>
        </div>
      </article>
      {data.map(({ title, position, image, date, skills, link }, i) => (
        <article key={i}>
          <div className='experience'>
            <figure className='experience_image'>
              <img src={image} alt={title} />
            </figure>
            <div className='info'>
              <h5 className='title'>
                <small>{title}</small>
              </h5>
              <p className='position'>
                <small>{position}</small>
              </p>
              <p className='date'>
                <small>
                  {date.start} - {date.end}
                </small>
              </p>
              {skills.length ? (
                <>
                  <span className='title'>
                    <strong>Skills: </strong>
                  </span>
                  {skills.map((skill, i) => (
                    <span key={i}>{skill + ' . '}</span>
                  ))}
                </>
              ) : null}
              <p>
                <small>{link}</small>
              </p>
            </div>
          </div>
          {i < data.length - 1 && <hr />}
        </article>
      ))}
    </section>
  );
};

export default Experience;
