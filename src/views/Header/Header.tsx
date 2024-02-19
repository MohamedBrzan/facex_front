import { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faPeopleGroup,
  faBell,
  faCommentDots,
  faHome,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../constants/Logo/Logo';
import './Header.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import unknown from '../../assets/unknown.png';
import { useDispatch, useSelector } from 'react-redux';
import State from '../../types/store/AuthSliceState';
import { logoutUser } from '../../store/reducers/AuthThunk/LogoutAsyncThunk';
import { ThunkDispatch } from '@reduxjs/toolkit';

const Header = () => {
  const { user } = useSelector((state: State) => state.Auth);
  const dispatch = useDispatch<ThunkDispatch<unknown, unknown, never>>();
  const dropMenuRef = useRef<HTMLDivElement>(null);
  const dropMenuModalRef = useRef<HTMLDivElement>(null);

  const ShowDropdownMenu = () => {
    dropMenuRef.current?.classList.toggle('active');
    dropMenuModalRef.current?.classList.toggle('active');
  };

  return (
    <header>
      <Container>
        <Row className='m-0'>
          <Col xs={12} md={6}>
            <Row>
              <Col xs={4} md={4} lg={3} className='logo_container'>
                <Logo />
              </Col>
              <Col>
                <SearchBar placeholder='Search' />
              </Col>
            </Row>
          </Col>
          <Col xs={10} md={4} className='head_icons_col'>
            <ul className='head_icons list-unstyled'>
              <NavLink className='icon' to='/'>
                <li title='Home' className='active'>
                  <div className='icon'>
                    <div className='svg'>
                      <FontAwesomeIcon icon={faHome} />
                    </div>
                    {/* <div className='badge'>23</div> */}
                  </div>
                  <div className='title'>
                    <small>Home</small>
                  </div>
                </li>
              </NavLink>

              <NavLink className='icon' to='/networks'>
                <li title='Network' className='notify'>
                  <div className='icon'>
                    <div className='svg'>
                      <FontAwesomeIcon icon={faPeopleGroup} />
                    </div>
                    <div className='badge'>23</div>
                  </div>
                  <div className='title'>
                    <small>Networks</small>
                  </div>
                </li>
              </NavLink>
              <NavLink className='icon' to='/jobs'>
                <li title='Jobs' className='notify'>
                  <div className='icon'>
                    <div className='svg'>
                      <FontAwesomeIcon icon={faBriefcase} />
                    </div>
                    <div className='badge'>77</div>
                  </div>
                  <div className='title'>
                    <small>Jobs</small>
                  </div>
                </li>
              </NavLink>
              <NavLink className='icon' to='/messages'>
                <li title='Messages' className='notify'>
                  <div className='icon'>
                    <div className='badge'>12</div>
                    <div className='svg'>
                      <FontAwesomeIcon icon={faCommentDots} />
                    </div>
                  </div>
                  <div className='title'>
                    <small>Messages</small>
                  </div>
                </li>
              </NavLink>

              <NavLink className='icon' to='/notifications'>
                <li title='Notifications' className='notify'>
                  <div className='icon'>
                    <div className='svg'>
                      <FontAwesomeIcon icon={faBell} />
                    </div>
                    <div className='badge'>33</div>
                  </div>
                  <div className='title'>
                    <small>Notifications</small>
                  </div>
                </li>
              </NavLink>
            </ul>
          </Col>
          <Col xs={2} className='user_col'>
            <div className='user' onClick={ShowDropdownMenu}>
              <div className='user_img'>
                <img src={user?.avatar || unknown} alt='User Photo' />
              </div>
              <div className='user_svg'>
                <FontAwesomeIcon icon={faEllipsis} />
              </div>
              <div className='drop_menu' ref={dropMenuRef}>
                <NavLink to='/me/profile'>
                  <small>profile</small>
                </NavLink>

                {/* <NavLink to='/authentication/sign_in'>
                  <small>Sign in</small>
                </NavLink>

                <NavLink to='/authentication/sign_up'>
                  <small>Sign Up</small>
                </NavLink> */}

                <NavLink to='/create/article'>
                  <small>Upload Article</small>
                </NavLink>

                <NavLink
                  to='/authentication/sign_in'
                  onClick={async () => dispatch(logoutUser())}
                >
                  <small>Logout</small>
                </NavLink>
              </div>
              <div className='drop_menu_modal' ref={dropMenuModalRef}></div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
