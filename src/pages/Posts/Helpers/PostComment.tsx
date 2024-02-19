import {
  useDeleteCommentMutation,
  useEditCommentMutation,
  useToggleCommentExpressionMutation,
} from '../../../store/apis/Comments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import FindExpressionForComments from '../../../components/FindExpression/FindExpressionForComment';
import GetExpressionsLength from '../../../functions/GetExpressionsLength';
import Loading from '../../../components/Loading/Loading';
import Comment from '../../../Interfaces/Comment/Comment';
import Post from '../../../Interfaces/Post/Post';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryActionCreatorResult,
  QueryDefinition,
} from '@reduxjs/toolkit/query';
import PostReplies from './PostReplies';
import CheckIdentifierName from '../../../functions/CheckIdentifierName';
import UIExpressions from '../../../functions/UIExpressions';
import ShowReplyInput from '../../../functions/ShowReplyInput';
import handleChangingExpressionForComment from '../../../functions/handleChangingExpressionForComment';
import { useSelector } from 'react-redux';
import UserImage from '../../../constants/UserAvatar';
import ActionsDropdown from './ActionsDropdown';
import CreateMessageForm from '../../../components/CreateMessageForm/CreateMessageForm';
import { useUploadReplyMutation } from '../../../store/apis/Replies';
import State from '../../../types/store/AuthSliceState';

type Props = {
  postIndex: number;
  comment: Comment;
  commentId?: string;
  isLoading: boolean;
  isSuccess: boolean;
  commentIndex: number;
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
  postId?: string;
};

export const showUpDropdown = (
  e: React.MouseEvent<SVGSVGElement, MouseEvent>
) => {
  const target = e.target as HTMLOrSVGScriptElement;
  target.nextElementSibling?.classList.toggle('active');
  target.nextElementSibling?.firstElementChild?.classList.toggle('active');
  setTimeout(
    () =>
      target.nextElementSibling?.lastElementChild?.classList.toggle('active'),
    1
  );
};

const PostComment = ({
  isLoading,
  isSuccess,
  comment,
  commentId,
  commentIndex,
  emojiName,
  refetch,
  postId,
  postIndex,
}: Props) => {
  const { user } = useSelector((state: State) => state.Auth);
  const [toggleCommentExpression] = useToggleCommentExpressionMutation();
  const [uploadReplyMessage] = useUploadReplyMutation();
  const [editComment, { isSuccess: editSuccess }] = useEditCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();

  return (
    <>
      {isLoading ? (
        <Loading text='loading...' />
      ) : (
        isSuccess && (
          <section className='comment' data-comment={commentId}>
            <section className='comment_info'>
              <div className='comment_left'>
                <figure className='avatar'>
                  <img
                    src={UserImage(comment.user.avatar)}
                    alt={`${comment.user.name?.first} ${comment.user.name?.last} avatar`}
                  />
                </figure>
              </div>
              <div className='comment_right'>
                <div className='comment_body'>
                  <div className='user_info'>
                    <div className='username'>
                      <small>
                        {' '}
                        {`${comment.user.name?.first} ${comment.user.name?.last}`}
                      </small>
                    </div>
                    <p className='user_profession'>{comment.user.profession}</p>
                    <p className='message' dir='auto'>
                      {comment.message}
                    </p>
                  </div>
                  {user?._id === comment.user._id && (
                    <div className='dots_icon'>
                      <FontAwesomeIcon
                        icon={faEllipsis}
                        onClick={(e) => showUpDropdown(e)}
                      />
                      {postId && commentId && (
                        <ActionsDropdown
                          editFunction={editComment}
                          editSuccess={editSuccess}
                          textToEdit={comment.message}
                          postId={postId}
                          commentId={commentId}
                          refetch={refetch}
                          APIDelete={deleteComment}
                          commentIndex={commentIndex}
                          textName='comment'
                          refetchAll={refetch}
                        />
                      )}
                    </div>
                  )}
                </div>
                <div className='comment_footer'>
                  {user?._id && (
                    <div
                      className='interact expressions'
                      onClick={async () =>
                        await handleChangingExpressionForComment({
                          commentId: commentId,
                          commentIndex,
                          toggleCommentExpression,
                          postIndex,
                          emojiName,
                          refetch,
                        })
                      }
                    >
                      {comment.expressions &&
                        FindExpressionForComments({
                          expressions: comment.expressions,
                        }).html}

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
                      src={
                        comment.expressions &&
                        CheckIdentifierName(
                          FindExpressionForComments({
                            expressions: comment.expressions,
                          }).name
                        )
                      }
                      alt=''
                    />
                    <span className='expressions_length px-1'>
                      {(comment.expressions &&
                        GetExpressionsLength(comment.expressions)) ||
                        null}
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
                  {comment.replies?.length && (
                    <span className='replies_count'>{`${comment.replies.length} Replies`}</span>
                  )}
                </div>

                <section className='replies'>
                  {commentId &&
                    comment.replies?.map((reply, replyIndex) => (
                      <PostReplies
                        postIndex={postIndex}
                        reply={reply}
                        replyIndex={replyIndex}
                        commentId={commentId}
                        commentIndex={commentIndex}
                        refetch={refetch}
                        emojiName={emojiName}
                        key={replyIndex}
                      />
                    ))}
                </section>
                {user?._id && (
                  <section className='create_reply hidden'>
                    <figure className='avatar'>
                      <img src={UserImage(user.avatar)} alt='User' />
                    </figure>

                    {commentId && (
                      <CreateMessageForm
                        postId={postId}
                        commentId={commentId}
                        uploadFunction={uploadReplyMessage}
                        visiblePrivacy={'public'}
                        refetch={refetch}
                        messageFor='reply'
                      />
                    )}
                  </section>
                )}
              </div>
            </section>
          </section>
        )
      )}
    </>
  );
};

export default PostComment;
