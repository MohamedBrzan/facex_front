import { Link } from 'react-router-dom';
import logo from '../../assets/FaceX_logo.svg';

import './Logo.scss';
import { useEffect, useRef } from 'react';

const Logo = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    logoRef.current?.addEventListener('click', () => {
      Array.from(document.querySelectorAll('ul.head_icons li')).forEach(
        (icon) => {
          icon.classList.remove('active');
        }
      );
      Array.from(
        document.querySelectorAll('ul.head_icons li')
      )[0].classList.add('active');
    });
  }, []);
  return (
    <Link to='/'>
      <div className='logo' ref={logoRef}>
        <img src={logo} alt='FaceX Black Logo' />
      </div>
    </Link>
  );
};

export default Logo;
