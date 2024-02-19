import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import FormSelect from 'react-bootstrap/FormSelect';

import './Payment.scss';

const CreatePayment = () => {
  return (
    <section className='create_payment'>
      <Container>
        <h3>
          <small>Add Payment</small>
        </h3>
        <Form>
          <Row>
            <Col>
              <FormGroup className='mb-3'>
                <FormControl type='text' placeholder='First name' required />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className='mb-3'>
                <FormControl type='text' placeholder='Last name' required />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup className='mb-3'>
            <FormControl type='email' placeholder='Email address' required />
          </FormGroup>
          <FormGroup className='mb-3'>
            <FormControl type='text' placeholder='street address' required />
          </FormGroup>
          <Row>
            <Col>
              <FormGroup className='mb-3'>
                <FormSelect required>
                  <option value='usa'>USA</option>
                  <option value='egy'>EGY</option>
                  <option value='aus'>AUS</option>
                  <option value='GER'>GER</option>
                </FormSelect>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className='mb-3'>
                <FormControl type='text' placeholder='city' required />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className='mb-3'>
                <FormControl type='text' placeholder='state' required />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup className='mb-3'>
            <FormControl
              type='tel'
              placeholder='Card number'
              minLength={13}
              maxLength={14}
              required
            />
          </FormGroup>
          <Row>
            <Col md={6}>
              <FormGroup className='mb-3'>
                <FormControl
                  type='tel'
                  placeholder='Expiration Date'
                  minLength={4}
                  maxLength={5}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup className='mb-3'>
                <FormControl
                  type='tel'
                  placeholder='CVC'
                  minLength={2}
                  maxLength={3}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup className='mb-3'>
                <FormControl
                  type='tel'
                  placeholder='ZIP'
                  minLength={3}
                  maxLength={8}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Button type='submit' className='submit_btn'>
          Create Payment
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default CreatePayment;
