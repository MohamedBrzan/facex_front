import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileAside from './Helpers/Aside/ProfileAside';
import ProfileSections from './Helpers/Sections/ProfileSections';
import './Profile.scss';

const Profile = () => {
  return (
    <section className='profile'>
      <Container>
        <Row>
          <Col md={8}>
            <ProfileSections />
          </Col>
          <Col md={4}>
            <ProfileAside />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Profile;
