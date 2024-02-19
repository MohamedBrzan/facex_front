import Container from 'react-bootstrap/Container';

const UploadText = () => {
  return (
    <section className='upload_text'>
      <Container className='p-0'>
        <section className='input_section'>
          <textarea
            name='title'
            id='article_title'
            placeholder='Title'
            maxLength={160}
            onKeyDown={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = `${target.scrollHeight}px`;
            }}
          ></textarea>
          <textarea
            name='description'
            id='article_content'
            placeholder='write here. You can also use @mentions.'
            onKeyDown={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = `${target.scrollHeight}px`;
            }}
          ></textarea>
        </section>
      </Container>
    </section>
  );
};

export default UploadText;
