import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
  QueryActionCreatorResult,
  QueryDefinition,
} from '@reduxjs/toolkit/query';
import Post from '../../../Interfaces/Post/Post';
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import Comment from '../../../Interfaces/Comment/Comment';
import Reply from '../../../Interfaces/Comment/Reply';
import { Button, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import UserAvatar from '../../../constants/UserAvatar';
import { useSelector } from 'react-redux';
import State from '../../../types/store/AuthSliceState';

type Props = {
  postId?: string;
  commentId?: string;
  replyId?: string;
  APIDelete: MutationTrigger<
    MutationDefinition<
      unknown,
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        object,
        FetchBaseQueryMeta
      >,
      never,
      unknown,
      'PostApi' | 'CommentApi' | 'ReplyApi'
    >
  >;
  refetch: () => QueryActionCreatorResult<
    QueryDefinition<
      string,
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        object,
        FetchBaseQueryMeta
      >,
      never,
      Post,
      'PostApi'
    >
  >;
  refetchAll: () => QueryActionCreatorResult<
    QueryDefinition<
      string,
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        object,
        FetchBaseQueryMeta
      >,
      never,
      Post,
      'PostApi'
    >
  >;
  commentIndex?: number;
  replyIndex?: number;
  textName: string;
  editFunction: MutationTrigger<
    MutationDefinition<
      unknown,
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        object,
        FetchBaseQueryMeta
      >,
      never,
      Post | Comment | Reply,
      'PostApi' | 'CommentApi' | 'ReplyApi'
    >
  >;
  editSuccess: boolean;
  textToEdit: string;
};

const ActionsDropdown = ({
  editFunction,
  editSuccess,
  textToEdit,
  postId,
  commentId,
  replyId,
  APIDelete,
  refetch,
  refetchAll,
  commentIndex,
  replyIndex,
  textName,
}: Props) => {
  const { user } = useSelector((state: State) => state.Auth);
  const handleDelete = async () => {
    let data;
    if (textName == 'comment') {
      data = {
        ref: {
          post: postId,
        },
        commentId,
      };
    } else if (textName == 'reply') {
      data = {
        replyId,
      };
    } else {
      data = {
        postId,
      };
    }
    await APIDelete(data);
    refetch();
    refetchAll && refetchAll();
    return;
  };

  const handleActive = () => {
    if (textName == 'comment') {
      Array.from(document.querySelectorAll('.actions_dropdown'))[
        commentIndex!
      ]?.classList.remove('active');
    } else {
      const commentCollection = Array.from(
        document.querySelectorAll('.actions_dropdown')
      )[commentIndex!];

      commentCollection[replyIndex]!.classList.remove('active');
    }
  };

  const uploadForm = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const privacyDropDownRef = useRef<HTMLDivElement>(null);

  const [content, setContent] = useState<string>(textToEdit);
  const [privacy, setPrivacy] = useState<string>('public');
  const showUpEditForm = () => {
    uploadForm.current?.classList.add('active');
    setContent(textToEdit);
    inputRef.current?.focus();
  };
  const hideEditForm = (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    uploadForm.current?.classList.remove('active');
    if (e) {
      const target = e.target as HTMLDivElement;
      const actionsBox = target.parentElement?.parentElement;
      actionsBox?.classList.remove('active');
      const actionsBoxParent = actionsBox?.parentElement;
      actionsBoxParent?.classList.remove('active');
    }
  };

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLTextAreaElement;
    setContent(target.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data;

    if (commentId && !replyId) {
      data = {
        commentId,
        message: content.trim() || textToEdit.trim(),
        visiblePrivacy: privacy,
      };
    } else if (replyId) {
      data = {
        replyId,
        reply: content.trim() || textToEdit.trim(),
        visiblePrivacy: privacy,
      };
    } else {
      data = {
        postId,
        content: content.trim() || textToEdit.trim(),
        visiblePrivacy: privacy,
      };
    }
    await editFunction(data).then(() => hideEditForm());
    refetch();

    const target = e.target as HTMLFormElement;

    const parent = target.parentElement?.parentElement?.parentElement;
    parent?.classList.remove('active');

    const container = parent?.parentElement;
    container?.classList.remove('active');

    const containerModal = container?.lastElementChild;
    containerModal?.classList.remove('active');
  };

  const handleOpenPrivacyDropDown = () =>
    privacyDropDownRef.current?.classList.toggle('active');

  const privacyTypes = ['public', 'connections', 'networks', 'custom', 'me'];
  const handlePrivacyChange = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    document
      .querySelectorAll('.actions_dropdown .upload_form .privacy_type')
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
    <div className='actions_dropdown' onClick={handleActive}>
      <div className='actions'>
        <div className='del' onClick={handleDelete}>
          Delete {textName}
        </div>
        <div className='edit' onClick={showUpEditForm}>
          Edit {textName}
        </div>
        <div className='upload_form' ref={uploadForm}>
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
              <FormControl
                ref={inputRef}
                as={'textarea'}
                value={content}
                cols={100}
                placeholder='what do you want to talk about?'
                required={true}
                onChange={(e) => handleChange(e)}
              />
              {content.trim().length > 0 && (
                <Button
                  type='submit'
                  className='submit_btn'
                  onClick={() => editSuccess && hideEditForm()}
                >
                  Edit
                </Button>
              )}
            </Form>
          </div>
          <div className='form_modal' onClick={(e) => hideEditForm(e)}></div>
        </div>
        {/* <div className='link'>Copy {textName} link</div> */}
      </div>
      <div
        className='actions_modal'
        onClick={(e) => {
          const target = e.target as HTMLDivElement;
          target.parentElement?.classList.remove('active');
          target.parentElement?.firstElementChild?.classList.remove('active');
          target.parentElement?.lastElementChild?.classList.remove('active');
        }}
      ></div>
    </div>
  );
};

export default ActionsDropdown;
