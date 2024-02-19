import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const About = () => {
  return (
    <section className='about'>
      <article className='head'>
        <div className='title'>
          <h4 className='head'>
            <small>About</small>
          </h4>
        </div>
        <div className='actions'>
          <div className='edit_icon'>
            <FontAwesomeIcon icon={faPencil} />
          </div>
        </div>
      </article>
      <article className='body'>
        <Markdown className='content' remarkPlugins={[remarkGfm]}>
          Hello, Thank you for checking out my profile, As a web developer, I am
          committed to creating and developing high-quality websites that are
          visually appealing, user friendly and highly functional. My expertise
          lies in leveraging the latest technologies such as HTML5, CSS3, Sass,
          Bootstrap, Tailwind CSS, JavaScript, Typescript, React.js, Node.js,
          Express.js, MongoDB, Graphql moreover Redux/toolkit and Webpack to
          create dynamic applications that meet client needs. With over 2 years
          of experience in this field, I have developed a deep understanding of
          how web development works from both the front end design perspective
          as well as back end coding side. My goal is always to deliver projects
          on time with an emphasis on quality assurance throughout each step of
          the process. If you're looking for someone who can bring your website
          vision into reality then look no further – I'm here ready to help!
        </Markdown>
      </article>
    </section>
  );
};

export default About;
