import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import Switches from '../../../../../functions/Switches';

const Activity = () => {
  useEffect(() => {
    Switches(
      'section.activity article.switches .buttons .switch',
      'section.activity article.switches .contents .content',
      'selected',
      'active',
      'data-content'
    );
  }, []);
  return (
    <section className='activity'>
      <article className='head'>
        <div className='title'>
          <h4 className='head'>
            <small>Activity</small>
          </h4>

          <Link to='/followers'>
            <small>200 followers</small>
          </Link>
        </div>
        <div className='actions'>
          <div className='create_btn'>Create a post</div>
          <div className='edit_icon'>
            <FontAwesomeIcon icon={faPencil} />
          </div>
        </div>
      </article>
      <article className='switches'>
        <div className='buttons'>
          <div className='switch posts selected' id='profile_posts'>
            Posts
          </div>
          <div className='switch comments' id='profile_comments'>
            Comments
          </div>
          <div className='switch images' id='profile_images'>
            Images
          </div>
          <div className='switch documents' id='profile_documents'>
            Documents
          </div>
        </div>
        <div className='contents'>
          <p className='content active' data-content='profile_posts'>
            Posts Guys Hello ✌️
          </p>
          <p className='content' data-content='profile_comments'>
            Comments Guys Hello ✌️
          </p>
          <p className='content' data-content='profile_images'>
            Images Guys Hello ✌️
          </p>
          <p className='content' data-content='profile_documents'>
            Documents Guys Hello ✌️
          </p>
        </div>
      </article>
    </section>
  );
};

export default Activity;
