import Reply from '../../Interfaces/Comment/Reply';
import GetUser from '../../constants/GetUser';
import './Replies.scss';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  QueryActionCreatorResult,
  QueryDefinition,
} from '@reduxjs/toolkit/query';
import { FetchBaseQueryMeta } from '@reduxjs/toolkit/query';
import Post from '../../Interfaces/Post/Post';
import DisplayReplyComponentFunc from './Helpers/DisplayReplyComponentFunc';

type ReplyData = {
  replies: Reply[];
  key: number;
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

const Replies = ({ replies, key }: ReplyData) => {
  // console.log('Replies', replies);
  const user = GetUser;

  return (
    <section className='replies'>
      {replies?.map(({ _id, user, reply, expressions }, i: number) => (
        <section className='reply' key={i}>
          {DisplayReplyComponentFunc({
            _id,
            user,
            expressions: expressions ?? {},
            message: reply,
            key,
          })}
        </section>
      ))}
      <section className='create_reply hidden'>
        <figure className='avatar'>
          <img src={user.avatar} alt='User' />
        </figure>
        <div className='input'>
          <input type='text' placeholder='what is in your mind' />
        </div>
      </section>
    </section>
  );
};

export default Replies;
