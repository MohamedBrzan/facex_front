import { useState } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import {
  BaseQueryFn,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
  QueryActionCreatorResult,
  QueryDefinition,
} from '@reduxjs/toolkit/query';
import { FetchArgs } from '@reduxjs/toolkit/query';
import Post from '../../Interfaces/Post/Post';
import Comment from '../../Interfaces/Comment/Comment';
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import './CreateMessageForm.scss';

type Props = {
  postId?: string | undefined;
  commentId?: string | undefined;
  uploadFunction: MutationTrigger<
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
      'CommentApi' | 'ReplyApi'
    >
  >;
  visiblePrivacy: string;
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
      Post | Comment,
      'PostApi' | 'CommentApi'
    >
  >;
  messageFor: string;
};

const CreateMessageForm = ({
  postId,
  uploadFunction,
  visiblePrivacy,
  commentId,
  refetch,
  messageFor,
}: Props) => {
  const [message, setMessage] = useState<string>('');

  const CreateMessage = async (postId: string | undefined) => {
    let data;
    if (messageFor === 'comment') {
      data = {
        message: message.trim(),
        visiblePrivacy,
        ref: {
          post: postId,
        },
      };
    } else {
      data = {
        ref: commentId,
        message: message.trim(),
        visiblePrivacy,
      };
    }

    await uploadFunction(data);
    setMessage('');
  };

  return (
    <Form
      className='create_message_form'
      onSubmit={async (e) => {
        e.preventDefault();
        await CreateMessage(postId && postId);
        refetch();
      }}
    >
      <FormControl
        className='message_input'
        as={'textarea'}
        placeholder='what is in your mind'
        required={true}
        value={message}
        onChange={(e) => {
          const target = e.target as HTMLTextAreaElement;
          setMessage(target.value);
        }}
      />
      <Button className='submit_btn' type='submit'>
        post
      </Button>
    </Form>
  );
};

export default CreateMessageForm;
