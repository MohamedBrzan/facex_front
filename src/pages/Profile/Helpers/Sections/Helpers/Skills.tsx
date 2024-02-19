import {
  faArrowRight,
  faPencil,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../../../../../assets/position_logo.png';
import { Link } from 'react-router-dom';

const Skills = () => {
  const data = [
    {
      id: 1,
      title: 'REST APIs',
      image,
      position: 'Fronted Developer (Freelance)',
    },
    {
      id: 2,
      title: 'HTML',
      image,
      position: 'Fronted Developer (Freelance)',
    },
    {
      id: 3,
      title: 'CSS',
      image,
      position: 'Fronted Developer (Freelance)',
    },
    {
      id: 4,
      title: 'React.js',
      image,
      position: 'Fronted Developer (Freelance)',
    },
  ];
  return (
    <section className='skills'>
      <article className='head'>
        <div className='title'>
          <h4 className='head'>
            <small>Skills</small>
          </h4>
        </div>
        <div className='actions'>
          <div className='create_btn'>Demonstrate skills</div>
          <div className='edit_icon'>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div className='edit_icon'>
            <FontAwesomeIcon icon={faPencil} />
          </div>
        </div>
      </article>
      {data.map(({ title, image, position }, i) => (
        <section className='skill' key={i}>
          <h5>
            <small>{title}</small>
          </h5>
          <div className='details'>
            <figure>
              <img src={image} alt={title} />
            </figure>
            <p>
              <small>{position}</small>
            </p>
          </div>
          {i < data.length - 1 && <hr />}
        </section>
      ))}
      <Link className='all_skills_link' to='/skills'>
        Show All {data.length} Skills
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </section>
  );
};

export default Skills;
