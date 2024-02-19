import { useState } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import {
  BaseQueryFn,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryActionCreatorResult,
  QueryDefinition,
} from '@reduxjs/toolkit/query';
import { FetchArgs } from '@reduxjs/toolkit/query';
import Post from '../../../Interfaces/Post/Post';
import { useUploadReplyMutation } from '../../../store/apis/Replies';

type Props = {
  commentId: string;
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
};

const CreateReplyForm = ({ commentId, refetch }: Props) => {
  const [uploadReply] = useUploadReplyMutation();
  const [message, setMessage] = useState<string>('');

  const CreateReply = async (commentId: string) => {
    const data = {
      ref: commentId,
      message,
      visiblePrivacy: 'custom',
    };

    await uploadReply(data);
    setMessage('');
  };

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        await CreateReply(commentId);
        refetch();
      }}
    >
      <FormControl
        className='comment_input'
        as={'textarea'}
        placeholder='what is in your mind'
        required={true}
        maxLength={150}
        value={message}
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          setMessage(target.value);
        }}
      />
      <Button className='submit_btn' type='submit'>
        post
      </Button>
    </Form>
  );
};

export default CreateReplyForm;
