import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Reply from '../../../Interfaces/Comment/Reply';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import FindExpressionForComments from '../../../components/FindExpression/FindExpressionForComment';
import {
  useDeleteReplyMutation,
  useEditReplyMutation,
  useToggleReplyExpressionMutation,
} from '../../../store/apis/Replies';
import Post from '../../../Interfaces/Post/Post';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryActionCreatorResult,
  QueryDefinition,
} from '@reduxjs/toolkit/query';
import GetExpressionsLength from '../../../functions/GetExpressionsLength';
import CheckIdentifierName from '../../../functions/CheckIdentifierName';
import UIExpressions from '../../../functions/UIExpressions';
import ShowReplyInput from '../../../functions/ShowReplyInput';
import handleChangingExpressionForReply from '../../../functions/handleChangingExpressionForReply';
import { showUpDropdown } from './PostComment';
import { useSelector } from 'react-redux';
import UserImage from '../../../constants/UserAvatar';
import ActionsDropdown from './ActionsDropdown';
import State from '../../../types/store/AuthSliceState';

type Props = {
  reply: Reply;
  replyIndex: number;
  commentId: string;
  commentIndex: number;
  postIndex: number;
  emojiName: string;
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

const PostReplies = ({
  reply,
  replyIndex,
  emojiName,
  commentId,
  commentIndex,
  postIndex,
  refetch,
}: Props) => {
  const { user } = useSelector((state: State) => state.Auth);
  const [toggleReplyExpression] = useToggleReplyExpressionMutation();
  const [editReply, { isSuccess: editSuccess }] = useEditReplyMutation();
  const [deleteReply] = useDeleteReplyMutation();

  return (
    <section className='reply' data-reply={commentId}>
      <section className='reply_info'>
        <div className='reply_left'>
          <figure className='avatar'>
            <img
              src={UserImage(reply.user.avatar)}
              alt={`${reply.user.name?.first} ${reply.user.name?.last} avatar`}
            />
          </figure>
        </div>
        <div className='reply_right'>
          <div className='reply_body'>
            <div className='user_info'>
              <div className='username'>
                <small>
                  {`${reply.user.name?.first} ${reply.user.name?.last}`}
                </small>
              </div>
              <p className='user_profession'>{user?.profession}</p>
              <p className='message' dir='auto'>
                {reply.reply}
              </p>
            </div>

            {user?._id === reply.user._id && (
              <div className='dots_icon'>
                <FontAwesomeIcon
                  icon={faEllipsis}
                  onClick={(e) => showUpDropdown(e)}
                />
                {commentId && (
                  <ActionsDropdown
                    editFunction={editReply}
                    editSuccess={editSuccess}
                    textToEdit={reply.reply}
                    commentId={commentId}
                    refetch={refetch}
                    APIDelete={deleteReply}
                    commentIndex={commentIndex}
                    replyIndex={replyIndex}
                    replyId={reply._id}
                    textName='reply'
                    refetchAll={refetch}
                  />
                )}
              </div>
            )}
          </div>
          <div className='reply_footer'>
            {user?._id && (
              <div
                className='interact expressions'
                onClick={async () =>
                  await handleChangingExpressionForReply({
                    postIndex,
                    commentIndex,
                    replyIndex,
                    replyId: reply._id,
                    emojiName,
                    toggleReplyExpression,
                    refetch,
                  })
                }
              >
                {
                  FindExpressionForComments({
                    expressions: reply.expressions,
                  }).html
                }

                <div className='expressions_container'>
                  {UIExpressions.map(({ name, image }, i) => (
                    <figure
                      className='expression'
                      key={i}
                      title={name}
                      onClick={() => (emojiName = name)}
                    >
                      <img src={image} alt={name} />
                    </figure>
                  ))}
                </div>
              </div>
            )}
            .
            <span className='expression_icon'>
              <img
                src={CheckIdentifierName(
                  FindExpressionForComments({
                    expressions: reply.expressions,
                  }).name
                )}
                alt=''
              />
              <span className='expressions_length px-1'>
                {GetExpressionsLength(reply.expressions) || null}
              </span>
            </span>
            {user?._id && (
              <span
                className='reply'
                onClick={() => commentId && ShowReplyInput(commentId)}
              >
                Reply
              </span>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default PostReplies;
