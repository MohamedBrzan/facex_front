import { Link } from 'react-router-dom';
import './Footer.scss';


const Footer = () => {
  const links = [
    { id: 1, title: 'About', to: '/about' },
    { id: 2, title: 'Accessability', to: '/accessability' },
    { id: 3, title: 'Help Center', to: '/help_center' },
    { id: 4, title: 'Privacy & Terms', to: '/privacy_terms' },
    { id: 5, title: 'Ad Choices', to: '/ad_choices' },
    { id: 6, title: 'Advertising', to: '/advertising' },
    { id: 7, title: 'Business Services', to: '/business_services' },
  ];
  return (
    <footer>
      <div className='footer_links'>
        {links.map(({ title, to }, i) => (
          <Link key={i} to={to}>
            {title}
          </Link>
        ))}
      </div>
      <div className='bottom_line'>
        All Rights Reserved &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
