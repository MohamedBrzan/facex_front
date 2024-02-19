import { useEffect } from 'react';
import Switches from '../../../../../functions/Switches';

const Interests = () => {
  useEffect(() => {
    Switches(
      'section.interests .switches .buttons .switch',
      'section.interests .switches .contents .content',
      'selected',
      'active',
      'data-content'
    );
  }, []);
  return (
    <section className='interests'>
      <article className='head'>
        <div className='title'>
          <h4 className='head'>
            <small>Interests</small>
          </h4>
        </div>
      </article>
      <article className='switches'>
        <div className='buttons'>
          <div className='switch voices selected' id='voices'>
            Top Voices
          </div>
          <div className='switch companies' id='companies'>
            Companies
          </div>
          <div className='switch Groups' id='groups'>
            Groups
          </div>
          <div className='switch newsletters' id='newsletters'>
            Newsletters
          </div>
          <div className='switch schools' id='schools'>
            Schools
          </div>
        </div>
        <div className='contents'>
          <p className='content active' data-content='voices'>
            Top Voices Guys Hello ✌️
          </p>
          <p className='content' data-content='companies'>
            Companies Guys Hello ✌️
          </p>
          <p className='content' data-content='groups'>
            Groups Guys Hello ✌️
          </p>
          <p className='content' data-content='newsletters'>
            Newsletters Guys Hello ✌️
          </p>
          <p className='content' data-content='schools'>
            Schools Guys Hello ✌️
          </p>
        </div>
      </article>
    </section>
  );
};

export default Interests;
