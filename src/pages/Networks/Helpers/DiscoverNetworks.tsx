import { Link } from 'react-router-dom';
import me from '../../../assets/me_opentowork.jpeg';
import cover from '../../../assets/cover.jpeg';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const DiscoverNetworks = () => {
  const fromMyCity = [
    {
      id: 1,
      name: 'Ali Fouad',
      position: 'Sowftware Engineer',
      image: me,
      cover,
      mutual: 12,
    },
    {
      id: 2,
      name: 'Ali Fouad',
      position: 'Sowftware Engineer',
      image: me,
      cover,
      mutual: 12,
    },
    {
      id: 3,
      name: 'Ali Fouad',
      position: 'Sowftware Engineer',
      image: me,
      cover,
      mutual: 12,
    },
  ];

  const fromMyUniversity = [
    {
      id: 1,
      name: 'Ali Fouad',
      position: 'Sowftware Engineer',
      image: me,
      cover,
      mutual: 12,
    },
    {
      id: 2,
      name: 'Ali Fouad',
      position: 'Sowftware Engineer',
      image: me,
      cover,
      mutual: 12,
    },
    {
      id: 3,
      name: 'Ali Fouad',
      position: 'Sowftware Engineer',
      image: me,
      cover,
      mutual: 12,
    },
  ];

  const fromYoutube = [
    {
      id: 1,
      name: 'Ali Fouad',
      position: 'Sowftware Engineer',
      image: me,
      cover,
      mutual: 12,
    },
    {
      id: 2,
      name: 'Ali Fouad',
      position: 'Sowftware Engineer',
      image: me,
      cover,
      mutual: 12,
    },
    {
      id: 3,
      name: 'Ali Fouad',
      position: 'Sowftware Engineer',
      image: me,
      cover,
      mutual: 12,
    },
  ];

  return (
    <section className='discover_networks'>
      <article className='from_my_city'>
        <div className='head'>
          <h6>
            <small>People who are in Egypt also follow these people</small>
          </h6>
          <Link to='/networks'>See all</Link>
        </div>
        <section className='cities_networks'>
          <Row className='data_row'>
            {fromMyCity.map(({ name, position, cover, image, mutual }, i) => (
              <Col xs={12} xl={3} key={i} className='person'>
                <figure className='cover'>
                  <img src={cover} alt={name} />
                </figure>
                <figure className='avatar'>
                  <img src={image} alt={name} />
                </figure>
                <div className='info'>
                  <h6 className='name'>
                    <small>{name}</small>
                  </h6>
                  <p className='position'>
                    <small>{position}</small>
                  </p>
                  <p className='mutual'>{mutual} mutual connections</p>
                </div>
                <button className='follow_btn'>Follow</button>
              </Col>
            ))}
          </Row>
        </section>
      </article>
      <article className='from_my_city'>
        <div className='head'>
          <h6>
            <small>People you may know from Tanta University</small>
          </h6>
          <Link to='/networks'>See all</Link>
        </div>
        <section className='university_networks'>
          <Row className='data_row'>
            {fromMyUniversity.map(
              ({ name, position, cover, image, mutual }, i) => (
                <Col xs={12} xl={3} key={i} className='person'>
                  <figure className='cover'>
                    <img src={cover} alt={name} />
                  </figure>
                  <figure className='avatar'>
                    <img src={image} alt={name} />
                  </figure>
                  <div className='info'>
                    <h6 className='name'>
                      <small>{name}</small>
                    </h6>
                    <p className='position'>
                      <small>{position}</small>
                    </p>
                    <p className='mutual'>{mutual} mutual connections</p>
                  </div>
                  <button className='follow_btn'>Follow</button>
                </Col>
              )
            )}
          </Row>
        </section>
      </article>
      <article className='from_my_city'>
        <div className='head'>
          <h6>
            <small>People you may know from YouTube</small>
          </h6>
          <Link to='/networks'>See all</Link>
        </div>
        <section className='youtube_networks'>
          <Row className='data_row'>
            {fromYoutube.map(({ name, position, cover, image, mutual }, i) => (
              <Col xs={12} xl={3} key={i} className='person'>
                <figure className='cover'>
                  <img src={cover} alt={name} />
                </figure>
                <figure className='avatar'>
                  <img src={image} alt={name} />
                </figure>
                <div className='info'>
                  <h6 className='name'>
                    <small>{name}</small>
                  </h6>
                  <p className='position'>
                    <small>{position}</small>
                  </p>
                  <p className='mutual'>{mutual} mutual connections</p>
                </div>
                <button className='follow_btn'>Follow</button>
              </Col>
            ))}
          </Row>
        </section>
      </article>
    </section>
  );
};

export default DiscoverNetworks;
