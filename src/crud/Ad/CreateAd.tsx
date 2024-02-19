import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import FormCheck from 'react-bootstrap/FormCheck';
import Button from 'react-bootstrap/Button';
import './Ad.scss';

const CreateAd = () => {
  return (
    <section className='create_ad'>
      <Container>
        <h3>
          <small>Upload An Ad : </small>
        </h3>
        <Form>
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
          <Row>
            <Col>
              <FormGroup className='mb-3'>
                <FormLabel>Start : </FormLabel>
                <FormControl
                  type='date'
                  placeholder='select ad starting time'
                  min={new Date().getDate()}
                  required
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className='mb-3'>
                <FormLabel>End : </FormLabel>
                <FormControl
                  type='date'
                  placeholder='select ad ending time'
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup className='mb-3'>
            <FormLabel>Tags : </FormLabel>
            <FormControl
              type='text'
              placeholder='write ad tags and separated by spaces'
              required
            />
          </FormGroup>
          <FormGroup className='mb-3'>
            <FormLabel>Choose Payment : </FormLabel>
            <FormCheck
              type='radio'
              name='payment'
              label='Payment One'
              required
            />
            <FormCheck type='radio' name='payment' label='Payment Two' />
          </FormGroup>
          <Button type='submit' className='submit_btn'>
            Upload
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default CreateAd;
