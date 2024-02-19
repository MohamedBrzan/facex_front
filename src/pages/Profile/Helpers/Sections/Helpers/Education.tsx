import { faPencil, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../../../../../assets/google_logo.jpeg';

const Education = () => {
  const data = [
    {
      id: 1,
      title: 'Tanta University',
      image,
      degree: 'Bachelor of Arts - BA, Surveying Engineering',
      date: { start: 'Aug 2014', end: 'Aug 2017' },
    },
  ];
  return (
    <section className='education'>
      <article className='head'>
        <div className='title'>
          <h4 className='head'>
            <small>Education</small>
          </h4>
        </div>
        <div className='actions'>
          <div className='edit_icon'>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div className='edit_icon'>
            <FontAwesomeIcon icon={faPencil} />
          </div>
        </div>
      </article>
      <article className='education_container'>
        {data.map(({ title, image, degree, date: { start, end } }, i) => (
          <section key={i} className='degree'>
            <figure>
              <img src={image} alt={title} />
            </figure>
            <div className='info'>
              <h5>
                <small>{title}</small>
              </h5>
              <p>
                <small>{degree}</small>
              </p>
              <p>
                <small>
                  {start} - {end}
                </small>
              </p>
            </div>
          </section>
        ))}
      </article>
    </section>
  );
};

export default Education;
