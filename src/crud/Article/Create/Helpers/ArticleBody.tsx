import Container from 'react-bootstrap/Container';
import UploadText from './UploadText';
import UploadImage from './UploadImage';

const ArticleBody = () => {
  return (
    <section className='article_body'>
      <Container>
        <article className='upload_section'>
          <UploadImage />
          <UploadText />
        </article>
      </Container>
    </section>
  );
};

export default ArticleBody;
