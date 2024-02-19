import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Posts from '../Posts/Posts';
import './Home.scss';
import { useEffect } from 'react';
import SideBar from '../../views/SideBar/SideBar';
import Aside from '../../views/Aside/Aside';

const Home = () => {
  useEffect(() => {
    document.body.style.setProperty('background-color', '#F4F2EE');
  }, []);
  return (
    <section className='home'>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <SideBar />
          </Col>
          <Col md={6}>
            <Posts />
          </Col>
          <Col md={3} className='aside_col'>
            <Aside />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
