import {
  faEdit,
  faEllipsis,
  faSliders,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import SearchBar from '../../../components/SearchBar/SearchBar';
import { useEffect } from 'react';
import Switches from '../../../functions/Switches';
import strangerImage from '../../../assets/stranger_message.jpeg';
import me from '../../../assets/me.jpg';

const Chat = () => {
  const messages = [
    {
      id: 0,
      image: strangerImage,
      name: 'Andrej Kitanovski',
      position: 'Market Research Specialist at Newtonx',
      slug: 'Andrej',
      date: 'Nov 15',
      msgs: [
        { id: 1, text: 'Hi Mohamed This is Me ✌️' },
        { id: 2, text: 'Hi Mohamed This is Me ✌️' },
      ],
      me: {
        id: 1,
        image: me,
        name: 'Mohamed Mahmoud',
        position: 'Web Developer',
        msgs: [
          { id: 1, text: 'Hi Andrej This is Me ✌️' },
          { id: 2, text: 'Hi Andrej This is Me ✌️' },
        ],
      },
    },
    {
      id: 1,
      image: strangerImage,
      name: 'zena',
      position: 'Market Research Specialist at Newtonx',
      slug: 'zena',
      date: 'Nov 15',
      msgs: [
        { id: 1, text: 'Hi Mohamed This is Me ✌️' },
        { id: 2, text: 'Hi Mohamed This is Me ✌️' },
      ],
      me: {
        id: 2,
        image: me,
        name: 'Mohamed Mahmoud',
        position: 'Web Developer',
        msgs: [
          { id: 1, text: 'Hi zena This is Me ✌️' },
          { id: 2, text: 'Hi zena This is Me ✌️' },
        ],
      },
    },
    {
      id: 3,
      image: strangerImage,
      name: 'Mazen',
      position: 'Market Research Specialist at Newtonx',
      slug: 'Mazen',
      date: 'Nov 15',
      msgs: [
        { id: 1, text: 'Hi Mohamed This is Me ✌️' },
        { id: 2, text: 'Hi Mohamed This is Me ✌️' },
      ],
      me: {
        id: 2,
        image: me,
        name: 'Mohamed Mahmoud',
        position: 'Web Developer',
        msgs: [
          { id: 1, text: 'Hi Mazen This is Me ✌️' },
          { id: 2, text: 'Hi Mazen This is Me ✌️' },
        ],
      },
    },
    {
      id: 4,
      image: strangerImage,
      name: 'Khaled',
      position: 'Market Research Specialist at Newtonx',
      slug: 'Khaled',
      date: 'Nov 15',
      msgs: [
        { id: 1, text: 'Hi Mohamed This is Me ✌️' },
        { id: 2, text: 'Hi Mohamed This is Me ✌️' },
      ],
      me: {
        id: 5,
        image: me,
        name: 'Mohamed Mahmoud',
        position: 'Web Developer',
        msgs: [
          { id: 1, text: 'Hi Khaled This is Me ✌️' },
          { id: 2, text: 'Hi Khaled This is Me ✌️' },
        ],
      },
    },
    {
      id: 5,
      image: strangerImage,
      name: 'Wael',
      position: 'Market Research Specialist at Newtonx',
      slug: 'Wael',
      date: 'Nov 15',
      msgs: [
        { id: 1, text: 'Hi Mohamed This is Me ✌️' },
        { id: 2, text: 'Hi Mohamed This is Me ✌️' },
      ],
      me: {
        id: 6,
        image: me,
        name: 'Mohamed Mahmoud',
        position: 'Web Developer',
        msgs: [
          { id: 1, text: 'Hi Wael This is Me ✌️' },
          { id: 2, text: 'Hi Wael This is Me ✌️' },
        ],
      },
    },
    {
      id: 7,
      image: strangerImage,
      name: 'Adel',
      position: 'Market Research Specialist at Newtonx',
      slug: 'Adel',
      date: 'Nov 15',
      msgs: [
        { id: 1, text: 'Hi Mohamed This is Me ✌️' },
        { id: 2, text: 'Hi Mohamed This is Me ✌️' },
      ],
      me: {
        id: 8,
        image: me,
        name: 'Mohamed Mahmoud',
        position: 'Web Developer',
        msgs: [
          { id: 1, text: 'Hi Adel This is Me ✌️' },
          { id: 2, text: 'Hi Adel This is Me ✌️' },
        ],
      },
    },
    {
      id: 9,
      image: strangerImage,
      name: 'Khames',
      position: 'Market Research Specialist at Newtonx',
      slug: 'Khames',
      date: 'Nov 15',
      msgs: [
        { id: 1, text: 'Hi Mohamed This is Me ✌️' },
        { id: 2, text: 'Hi Mohamed This is Me ✌️' },
      ],
      me: {
        id: 10,
        image: me,
        name: 'Mohamed Mahmoud',
        position: 'Web Developer',
        msgs: [
          { id: 1, text: 'Hi Khames This is Me ✌️' },
          { id: 2, text: 'Hi Khames This is Me ✌️' },
        ],
      },
    },
    {
      id: 11,
      image: strangerImage,
      name: 'Toni',
      position: 'Market Research Specialist at Newtonx',
      slug: 'Toni',
      date: 'Nov 15',
      msgs: [
        { id: 1, text: 'Hi Mohamed This is Me ✌️' },
        { id: 2, text: 'Hi Mohamed This is Me ✌️' },
      ],
      me: {
        id: 12,
        image: me,
        name: 'Mohamed Mahmoud',
        position: 'Web Developer',
        msgs: [
          { id: 1, text: 'Hi Toni This is Me ✌️' },
          { id: 2, text: 'Hi Toni This is Me ✌️' },
        ],
      },
    },
    {
      id: 13,
      image: strangerImage,
      name: 'zonzon',
      position: 'Market Research Specialist at Newtonx',
      slug: 'zonzon',
      date: 'Nov 15',
      msgs: [
        { id: 1, text: 'Hi Mohamed This is Me ✌️' },
        { id: 2, text: 'Hi Mohamed This is Me ✌️' },
      ],
      me: {
        id: 14,
        image: me,
        name: 'Mohamed Mahmoud',
        position: 'Web Developer',
        msgs: [
          { id: 1, text: 'Hi zonzon This is Me ✌️' },
          { id: 2, text: 'Hi zonzon This is Me ✌️' },
        ],
      },
    },
    {
      id: 15,
      image: strangerImage,
      name: 'swisi',
      position: 'Market Research Specialist at Newtonx',
      slug: 'swisi',
      date: 'Nov 15',
      msgs: [
        { id: 1, text: 'Hi Mohamed This is Me ✌️' },
        { id: 2, text: 'Hi Mohamed This is Me ✌️' },
      ],
      me: {
        id: 16,
        image: me,
        name: 'Mohamed Mahmoud',
        position: 'Web Developer',
        msgs: [
          { id: 1, text: 'Hi swisi This is Me ✌️' },
          { id: 2, text: 'Hi swisi This is Me ✌️' },
        ],
      },
    },
  ];
  useEffect(() => {
    Switches(
      '.chat_section .message_section .switches .switch_tab',
      '.chat_section .message_section .switches .contents .content',
      'selected',
      'active',
      'data-content'
    );
  }, []);
  return (
    <section className='chat_section'>
      <Row>
        <Col>
          <section className='message_section'>
            <article className='head'>
              <h5 className='title'>
                <small>Messages</small>
              </h5>
              <div className='svg'>
                <div className='ellipsis'>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
                <div className='edit'>
                  <FontAwesomeIcon icon={faEdit} />
                </div>
              </div>
            </article>
            <hr />
            <div className='search_box'>
              <SearchBar placeholder='Search Messages' />
              <div className='svg'>
                <FontAwesomeIcon icon={faSliders} />
              </div>
            </div>
            <div className='switches'>
              <div className='switch_tabs'>
                <div className='switch_tab selected' id='focused_messages'>
                  Focused
                </div>
                <div className='switch_tab' id='other_messages'>
                  Other
                </div>
              </div>
              <div className='contents'>
                <div className='content active' data-content='focused_messages'>
                  <section className='networks_messages'>
                    {messages.map(
                      ({ image, name, position, slug, date }, i) => (
                        <section key={i} className='msg' id={slug}>
                          <div className='data'>
                            <div className='data_info'>
                              <figure>
                                <img src={image} alt={name} />
                              </figure>
                              <div className='info'>
                                <h6 className='name'>
                                  <small>{name}</small>
                                </h6>
                                <p className='position'>
                                  <small>{position}</small>
                                </p>
                              </div>
                            </div>
                            <div className='date_container'>
                              <div className='date'>{date}</div>
                              <div className='svg'>
                                <FontAwesomeIcon icon={faEllipsis} />
                              </div>
                            </div>
                          </div>
                          {i < messages.length - 1 && <hr />}
                        </section>
                      )
                    )}
                  </section>
                </div>
                <div className='content' data-content='other_messages'>
                  Other Messages Guys ✌️
                </div>
              </div>
            </div>
          </section>
        </Col>
        <Col>
          <section className='message_thread'>
            <section className='networks_messages'>
              {messages.map(({ image, name, position, slug, date }, i) => (
                <section key={i} className='msg' id={slug}>
                  <div className='data'>
                    <div className='data_info'>
                      <figure>
                        <img src={image} alt={name} />
                      </figure>
                      <div className='info'>
                        <h6 className='name'>
                          <small>{name}</small>
                        </h6>
                        <p className='position'>
                          <small>{position}</small>
                        </p>
                      </div>
                    </div>
                    <div className='date_container'>
                      <div className='date'>{date}</div>
                      <div className='svg'>
                        <FontAwesomeIcon icon={faEllipsis} />
                      </div>
                    </div>
                  </div>
                  {i < messages.length - 1 && <hr />}
                </section>
              ))}
            </section>
          </section>
        </Col>
      </Row>
    </section>
  );
};

export default Chat;
