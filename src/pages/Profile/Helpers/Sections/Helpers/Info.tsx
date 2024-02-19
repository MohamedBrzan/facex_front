import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cover from '../../../../../assets/cover.jpeg';
import me from '../../../../../assets/me.jpg';
import {
  faBuildingFlag,
  faCircleChevronLeft,
  faCircleChevronRight,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Info = () => {
  useEffect(() => {
    const carouselSlide = document.querySelector(
      '.info .info_carousel .carousel_slides'
    ) as HTMLDivElement;

    const carouselSlides = document.querySelectorAll('.carousel_slides .slide');

    const prevBtn = document.querySelector(
      '.info .info_carousel .arrows_btns .arrow_left'
    ) as HTMLOrSVGImageElement;

    const nextBtn = document.querySelector(
      '.info .info_carousel .arrows_btns .arrow_right'
    ) as HTMLOrSVGImageElement;

    let counter = 1;

    const size = carouselSlides[0]?.clientWidth;

    carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';

    nextBtn.addEventListener('click', function () {
      if (counter >= carouselSlides.length) return;

      carouselSlide.style.transition = 'transform 0.4s ease-in-out';

      counter++;

      carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
    });

    prevBtn.addEventListener('click', function () {
      if (counter <= 0) {
        return;
      }
      carouselSlide.style.transition = 'transform 0.4s ease-in-out';

      counter--;

      carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
    });
  }, []);

  return (
    <section className='info'>
      <article className='head'>
        <figure className='cover'>
          <img src={cover} alt='User Cover.' />
          <div className='edit_icon'>
            <FontAwesomeIcon icon={faPencil} />
          </div>
        </figure>
        <figure className='avatar'>
          <img src={me} alt='User Avatar' />
        </figure>
      </article>
      <article className='middle'>
        <div className='pencil_svg'>
          <FontAwesomeIcon icon={faPencil} size='1x' />
        </div>
        <Row className='user_info'>
          <Col md={8} className='name'>
            <h4 className='title'>Mohamed Mahmoud</h4>
            <p className='position'>
              <small>Web Developer</small>
            </p>
            <div className='talking_about'>
              <p>
                <small>
                  Talks about #mernstack, #programmer, #programming,
                  #webdeveloper, and #fullstackdeveloper
                </small>
              </p>
            </div>
            <div className='address'>
              <p>
                <small>Tanta, Al Gharbiyah, Egypt</small>
              </p>
              <Link to='/contact'>
                <small>Contact info</small>
              </Link>
            </div>
            <div className='portfolio'>
              <Link to='/portfolio'>https://MyProtfolioIsHere.com</Link>
            </div>
            <div className='networks'>
              <span>
                <small>200 followers</small>
              </span>
              <span>
                <small>200 connections</small>
              </span>
            </div>
          </Col>
          <Col md={4} className='work'>
            <FontAwesomeIcon icon={faBuildingFlag} /> <span>Freelancer</span>
          </Col>
        </Row>{' '}
        <div className='actions_btns'>
          <div className='open'> Open to</div>
          <div className='add'> Add profile section</div>
          <div className='more'> More</div>
        </div>
        <div className='info_carousel'>
          <div className='carousel_slides'>
            <div className='slide'>
              <h6>
                <small>Open to work</small>
              </h6>
              <p>
                <small>
                  Frontend Developer · Back End Developer · Web Developer ·
                  React Developer · Javascript Developer.
                </small>
              </p>
              <Link to='/details'>
                <small>Show details</small>
              </Link>
              <div className='edit_icon'>
                <FontAwesomeIcon icon={faPencil} />
              </div>
            </div>
            <div className='slide'>
              <h6>
                <small>Providing Services</small>
              </h6>
              <p>
                <small>Web Development and Web Design.</small>
              </p>
              <Link to='/details'>
                <small>Show details</small>
              </Link>
              <div className='edit_icon'>
                <FontAwesomeIcon icon={faPencil} />
              </div>
            </div>
            <div className='slide'>
              <h6>
                <small>Open to work</small>
              </h6>
              <p>
                <small>
                  Frontend Developer · Back End Developer · Web Developer ·
                  React Developer · Javascript Developer
                </small>
              </p>
              <Link to='/details'>
                <small>Show details</small>
              </Link>
              <div className='edit_icon'>
                <FontAwesomeIcon icon={faPencil} />
              </div>
            </div>
            <div className='slide'>
              <h6>
                <small>Open to work</small>
              </h6>
              <p>
                <small>
                  Frontend Developer · Back End Developer · Web Developer ·
                  React Developer · Javascript Developer
                </small>
              </p>
              <Link to='/details'>
                <small>Show details</small>
              </Link>
              <div className='edit_icon'>
                <FontAwesomeIcon icon={faPencil} />
              </div>
            </div>
            <div className='slide'>
              <h6>
                <small>Open to work</small>
              </h6>
              <p>
                <small>
                  Frontend Developer · Back End Developer · Web Developer ·
                  React Developer · Javascript Developer
                </small>
              </p>
              <Link to='/details'>
                <small>Show details</small>
              </Link>
              <div className='edit_icon'>
                <FontAwesomeIcon icon={faPencil} />
              </div>
            </div>
            <div className='slide'>
              <h6>
                <small>Open to work</small>
              </h6>
              <p>
                <small>
                  Frontend Developer · Back End Developer · Web Developer ·
                  React Developer · Javascript Developer
                </small>
              </p>
              <Link to='/details'>
                <small>Show details</small>
              </Link>
              <div className='edit_icon'>
                <FontAwesomeIcon icon={faPencil} />
              </div>
            </div>
          </div>
          <div className='arrows_btns'>
            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              size='2x'
              className='arrow_left'
              title='Previous Button'
            />
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              size='2x'
              className='arrow_right'
              title='Next Button'
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Info;
