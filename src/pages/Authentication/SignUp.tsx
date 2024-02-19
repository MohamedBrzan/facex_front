import { useEffect, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import appleImg from '../../assets/apple.png';
import googleImg from '../../assets/google_logo.jpeg';
import facebookImg from '../../assets/facebook.png';
import './Authentication.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import Footer from '../../views/Footer/Footer';
import { registerUser } from '../../store/reducers/AuthThunk/RegisterAsyncThunk';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { loginUser } from '../../store/reducers/AuthThunk/LoginAsyncThunk';

const SignUp = () => {
  const dispatch = useDispatch<ThunkDispatch<unknown, unknown, never>>();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const rightArrowRef = useRef<HTMLDivElement>(null);
  const leftArrowRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const singUpButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const left = leftArrowRef?.current;
    const right = rightArrowRef?.current;
    const row = rowRef?.current;
    const submitButton = singUpButtonRef?.current;

    if (firstName == '' || lastName == '' || email == '' || password == '') {
      submitButton?.classList.add('hidden');
    } else {
      submitButton?.classList.remove('hidden');
    }

    left?.addEventListener('click', () => {
      row?.classList.remove('move');
      left.classList.add('disabled');
      right?.classList.remove('disabled');
    });

    right?.addEventListener('click', () => {
      row?.classList.add('move');
      right.classList.add('disabled');
      left?.classList.remove('disabled');
    });

    submitButton?.addEventListener('click', () => {
      if (firstName == '' || lastName == '') {
        return left?.click();
      } else if (email == '' || password == '') {
        return right?.click();
      }
    });
  }, [email, firstName, lastName, password]);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      avatar: '',
      cover: '',
      name: {
        first: firstName,
        last: lastName,
      },
      email,
      password,
    };

    dispatch(registerUser(data)).then(() =>
      dispatch(loginUser({ username: email, password }))
    );

    navigate('/');
  };

  return (
    <section className='authentication sign_up'>
      <section className='form'>
        <h2>Sign up</h2>
        <p>
          <small>Make the most of your professional life</small>
        </p>
        <Form onSubmit={async (e) => await handleRegister(e)}>
          <Row ref={rowRef}>
            <Col xs={12}>
              <FormGroup className='mb-3'>
                <Input
                  value={firstName}
                  type='text'
                  placeholder='First Name'
                  label='First Name'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const targetVal = e.target as HTMLInputElement;
                    setFirstName(targetVal.value);
                  }}
                  required={true}
                />
              </FormGroup>
              <FormGroup className='mb-3'>
                <Input
                  value={lastName}
                  type='text'
                  placeholder='Last Name'
                  label='Last Name'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const targetVal = e.target as HTMLInputElement;
                    setLastName(targetVal.value);
                  }}
                  required={true}
                />
              </FormGroup>
            </Col>
            <Col xs={12}>
              <FormGroup className='mb-3'>
                <Input
                  value={email}
                  type='email'
                  placeholder='Email Address'
                  label='Email Address'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const targetVal = e.target as HTMLInputElement;
                    setEmail(targetVal.value);
                  }}
                  required={true}
                />
              </FormGroup>
              <FormGroup className='mb-3'>
                <Input
                  value={password}
                  type='password'
                  placeholder='Password'
                  label='Password'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const targetVal = e.target as HTMLInputElement;
                    setPassword(targetVal.value);
                  }}
                  required={true}
                />
              </FormGroup>
            </Col>
          </Row>

          <div className='indicators_buttons'>
            <div className='left disabled' ref={leftArrowRef} title='left'>
              <FontAwesomeIcon icon={faCircleArrowLeft} />
            </div>
            <div className='right' ref={rightArrowRef} title='right'>
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </div>
          </div>

          <Button type='submit' className='submit_btn' ref={singUpButtonRef}>
            Sign Up
          </Button>
        </Form>
        <div className='hr'>
          <hr />
          <div className='or'>or</div>
        </div>
        <p className='notice'>
          By clicking Continue, you agree to LinkedIn’s User Agreement,
          <Link to='/privacy_policy'>Privacy Policy</Link>, and
          <Link to='/cookie_policy'>Cookie Policy</Link> .
        </p>
        <div className='auth_btn'>
          <figure>
            <img src={appleImg} alt='Google Sign in' />
          </figure>
          <span> Sign in with Apple</span>
        </div>
        <div className='auth_btn'>
          <figure>
            <img src={googleImg} alt='Google Sign in' />
          </figure>
          <span> Sign in with Google</span>
        </div>
        <div className='auth_btn'>
          <figure>
            <img src={facebookImg} alt='Google Sign in' />
          </figure>
          <span> Sign in with Facebook</span>
        </div>
      </section>
      <div className='sign_in'>
        You already in FaceX? <Link to='/authentication/sign_in'>sign in</Link>
      </div>
      <Footer />
    </section>
  );
};

export default SignUp;
