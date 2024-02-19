import './FollowBtn.scss';
import ChangeButtonTextContent from '../../functions/ChangeButtonTextContent';
import { useSendFollowMutation } from '../../store/apis/Users';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryActionCreatorResult,
  QueryDefinition,
} from '@reduxjs/toolkit/query';
import Post from '../../Interfaces/Post/Post';
import User from '../../Interfaces/User/User';

type Props = {
  condition: boolean | number | string;
  following: string | undefined;
  refetch?: () => QueryActionCreatorResult<
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
      Post | User,
      'PostApi' | 'UsersApi'
    >
  >;
};

const FollowBtn = ({ condition, following, refetch }: Props) => {
  const [sendFollow] = useSendFollowMutation();
  const follow = () => {
    setTimeout(async () => {
      const data = {
        following,
      };
      await sendFollow(data);
      refetch && refetch();
    }, 1000);
  };
  return (
    Boolean(condition) === true && (
      <section
        className='follow_btn unconnected'
        onClick={(e) => {
          ChangeButtonTextContent(e, 'Connected');
          follow();
        }}
      >
        follow
      </section>
    )
  );
};

export default FollowBtn;
