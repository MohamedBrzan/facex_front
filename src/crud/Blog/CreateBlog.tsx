import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import FormSelect from 'react-bootstrap/FormSelect';
import Button from 'react-bootstrap/Button';

import './Blog.scss';

const CreateBlog = () => {
  return (
    <section className='create_blog'>
      <Container>
        <h3>
          <small>Create Blog : </small>
        </h3>
        <Form>
          <FormGroup className='mb-3'>
            <FormLabel>Title : </FormLabel>
            <FormControl type='text' placeholder='write the title' required />
          </FormGroup>
          <FormGroup className='mb-3'>
            <FormLabel>Content : </FormLabel>
            <FormControl
              as='textarea'
              rows={3}
              placeholder='write the content'
              required
            />
          </FormGroup>{' '}
          <FormGroup className='mb-3'>
            <FormLabel>Images : </FormLabel>
            <FormControl
              type='file'
              placeholder='select ad images'
              multiple
              accept='image/jpeg, image/png'
              pattern='([^\s]+(\.(?i)(jpg|png|gif|bmp))$)'
              required
            />
          </FormGroup>
          <FormGroup className='mb-3'>
            <FormLabel>Videos : </FormLabel>
            <FormControl
              type='file'
              placeholder='select ad videos'
              multiple
              accept='video/mp4'
              pattern='([^\s]+\.(mp4|mov|avi))'
              required
            />
          </FormGroup>
          <FormGroup className='mb-3'>
            <FormLabel>Status : </FormLabel>
            <FormSelect size='sm' required>
              {/* <option>Choose the Status</option> */}
              <option value='pending'>Pending</option>
              <option value='active'>Active</option>
              <option value='hide'>Hide</option>
            </FormSelect>
          </FormGroup>
          <FormGroup className='mb-3'>
            <FormLabel>Privacy : </FormLabel>
            <FormSelect size='sm' required>
              {/* <option>Choose the Status</option> */}
              <option value='public'>Public</option>
              <option value='friends'>Friends</option>
              <option value='me'>Only Me</option>
              <option value='custom'>Custom</option>
            </FormSelect>
          </FormGroup>
          <Button type='submit' className='submit_btn'>
          Create
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default CreateBlog;
