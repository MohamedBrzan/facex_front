import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import NetworksAside from './Helpers/NetworksAside';
import DiscoverNetworks from './Helpers/DiscoverNetworks';
import './Networks.scss';
import { useEffect } from 'react';

const Networks = () => {
  useEffect(() => {
    document.body.style.setProperty('background-color', '#F4F2EE');
  }, []);
  return (
    <section className='networks'>
      <Container>
        <Row className='m-0'>
          <Col md={4}>
            <NetworksAside />
          </Col>
          <Col md={8}>
            <DiscoverNetworks />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Networks;
