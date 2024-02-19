import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import {
  useGetPostsQuery,
  useUploadPostMutation,
} from '../../store/apis/Posts';
import './Post.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import UserAvatar from '../../constants/UserAvatar';
import State from '../../types/store/AuthSliceState';

const CreatePost = () => {
  const { user } = useSelector((state: State) => state.Auth);
  const { refetch } = useGetPostsQuery('');
  const uploadPostRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLPreElement>(null);
  const privacyDropDownRef = useRef<HTMLDivElement>(null);

  const [uploadPost, { isSuccess }] = useUploadPostMutation();
  const [privacy, setPrivacy] = useState<string>('public');
  const showUploadPost = () => {
    uploadPostRef.current?.classList.add('active');
    inputRef.current?.focus();
  };

  // const addStringBefore = (el: HTMLElement, value: string) => {
  //   el.insertAdjacentHTML('beforebegin', value);
  // };

  // const addStringAfter = (el: HTMLElement, value: string) => {
  //   el.insertAdjacentHTML('afterend', value);
  // };

  const hideUploadPost = () =>
    uploadPostRef.current?.classList.remove('active');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      content: inputRef.current?.textContent,
      visiblePrivacy: privacy,
    };
    await uploadPost(data).then(hideUploadPost);
    refetch();
  };

  const handleOpenPrivacyDropDown = () =>
    privacyDropDownRef.current?.classList.toggle('active');

  const privacyTypes = ['public', 'connections', 'networks', 'custom', 'me'];
  const handlePrivacyChange = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    document
      .querySelectorAll('.create_post .upload_post_form .privacy_type')
      .forEach((p) => {
        if (p.getAttribute('class')?.includes('privacy_type')) {
          p.classList.remove('active');
        } else {
          p.parentElement?.classList.add('active');
        }
      });

    const target = e.target as HTMLDivElement;
    if (target.getAttribute('class')?.includes('privacy_type')) {
      target.classList.toggle('active');
      setPrivacy(target.getAttribute('title') || 'public');
    } else {
      target.parentElement?.classList.toggle('active');
      setPrivacy(target.parentElement?.getAttribute('title') || 'public');
    }

    handleOpenPrivacyDropDown;
  };

  return (
    <section className='create_post'>
      <div className='text'>
        <figure className='avatar'>
          <img src={UserAvatar(user.avatar)} alt='User' />
        </figure>
        <div className='input' onClick={showUploadPost}></div>
      </div>
      <div className='upload_post_form' ref={uploadPostRef}>
        <div className='content_form'>
          <div className='user_info' onClick={handleOpenPrivacyDropDown}>
            <figure>
              <img
                src={UserAvatar(user.avatar)}
                alt={`this is ${user?.name?.first} ${user?.name?.last} avatar`}
              />
            </figure>
            <div className='info'>
              <h4 className='username'>{`${user?.name?.first} ${user?.name?.last}`}</h4>
              <p className='privacy'>Post to {privacy}</p>
              <div className='privacy_drop_menu' ref={privacyDropDownRef}>
                <h6>privacy</h6>
                <hr />
                {privacyTypes.map((type, index) => (
                  <div
                    key={index}
                    title={type}
                    className={
                      index === 0 ? 'privacy_type active' : 'privacy_type'
                    }
                    onClick={(e) => handlePrivacyChange(e)}
                  >
                    <div className='text'>{type}</div>
                    <div className='radio_1'>
                      <div className='radio_2'></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='svg'>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>

          <Form onSubmit={(e) => handleSubmit(e)}>
            {/* <div
              className='textarea_div'
              id='textarea_div_id'
              contentEditable
              role='textarea'
              ref={inputRef}
              autoFocus
              placeholder='What is in your mind?'
            ></div> */}

            <pre
              className='textarea_div'
              id='textarea_div_id'
              contentEditable
              role='textarea'
              ref={inputRef}
              autoFocus
              placeholder='What is in your mind?'
            ></pre>

            <Button
              type='submit'
              className='submit_btn'
              onClick={() => isSuccess && hideUploadPost()}
            >
              post
            </Button>
          </Form>
        </div>
        <div className='form_modal' onClick={hideUploadPost}></div>
      </div>
    </section>
  );
};

export default CreatePost;
