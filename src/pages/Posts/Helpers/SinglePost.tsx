import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PostComment, { showUpDropdown } from './PostComment';
import {
  faArrowRotateLeft,
  faBookmark as solidBookMark,
  faComment,
  faRepeat,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';

import FindExpression from '../../../components/FindExpression/FindExpression';
import GetExpressionsLength from '../../../functions/GetExpressionsLength';

import {
  useDeletePostMutation,
  useEditPostMutation,
  useGetPostQuery,
  useSaveMutation,
  useShareMutation,
  useTogglePostExpressionMutation,
} from '../../../store/apis/Posts';
import Loading from '../../../components/Loading/Loading';

import handleChangingExpressionForPost from '../../../functions/handleChangingExpressionForPost';
import UIExpressions from '../../../functions/UIExpressions';
import ShowComments from './ShowComments';
import ShowMiniExpressionsIcons from '../../../functions/ShowMiniExpressionsIcons';
import { useSelector } from 'react-redux';
import { faBookmark as regularBookMark } from '@fortawesome/free-regular-svg-icons';
import FollowBtn from '../../../components/FollowBtn/FollowBtn';
import UserImage from '../../../constants/UserAvatar';
import CreateMessageForm from '../../../components/CreateMessageForm/CreateMessageForm';
import { useUploadCommentMutation } from '../../../store/apis/Comments';
import { Link } from 'react-router-dom';
import ActionsDropdown from './ActionsDropdown';
import {
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryActionCreatorResult,
  QueryDefinition,
} from '@reduxjs/toolkit/query';
import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { FetchArgs } from '@reduxjs/toolkit/query';
import Post from '../../../Interfaces/Post/Post';
import State from '../../../types/store/AuthSliceState';

type Props = {
  postId: string;
  postIndex: number;
  refetchPosts: () => QueryActionCreatorResult<
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

const SinglePost = ({ postId, postIndex, refetchPosts }: Props) => {
  const { user } = useSelector((state: State) => state.Auth);
  const [updatePost, { isSuccess: editSuccess }] = useEditPostMutation();
  const [deletePost] = useDeletePostMutation();
  const [uploadCommentMessage] = useUploadCommentMutation();
  const { isLoading, isSuccess, data: post, refetch } = useGetPostQuery(postId);
  const [togglePostExpression] = useTogglePostExpressionMutation();
  let emojiName: string;

  const [sharePost] = useShareMutation();
  const [savePost] = useSaveMutation();

  return (
    <article className='post'>
      {isLoading ? (
        <Loading text='post loading...' />
      ) : (
        isSuccess && (
          <>
            <div className='post_head'>
              {user?._id === post.user._id && (
                <div className='dots_icon'>
                  <FontAwesomeIcon
                    icon={faEllipsis}
                    onClick={(e) => showUpDropdown(e)}
                  />
                  <ActionsDropdown
                    APIDelete={deletePost}
                    refetch={refetch}
                    refetchAll={refetchPosts}
                    editFunction={updatePost}
                    editSuccess={editSuccess}
                    textToEdit={post.content}
                    postId={postId}
                    textName='post'
                  />
                </div>
              )}
              <div className='user_info'>
                <figure className='avatar'>
                  <img
                    src={UserImage(post.user.avatar)}
                    alt={post.user.name?.additional}
                  />
                </figure>

                <div className='user'>
                  <div>
                    <strong className='username'>
                      {post.user.name?.first + ' '}
                    </strong>
                    <strong className='username'>{post.user.name?.last}</strong>
                  </div>

                  <div className='user_position'>
                    <small>{post.user.profession}</small>
                  </div>
                </div>
              </div>

              <FollowBtn
                condition={
                  user?._id &&
                  user?._id !== post.user._id &&
                  post.user.followers?.indexOf(user._id) === -1
                }
                following={post.user._id}
                refetch={refetch}
              />
            </div>

            <div className='post_body'>
              {post.content.split(' ').map((arr, index) => {
                if (arr.startsWith('@')) {
                  return (
                    <Link to='/' key={index}>
                      {arr.slice(1) + ' '}
                    </Link>
                  );
                } else if (arr.startsWith('#') || arr.startsWith('http')) {
                  return (
                    <Link to='/' key={index}>
                      {arr + ' '}
                    </Link>
                  );
                }
                return arr.toString() + ' ';
              })}
            </div>
            <div className='post_general'>
              <div className='mini_expressions'>
                {ShowMiniExpressionsIcons(post.expressions)}
                <span className='expressions_length'>
                  {GetExpressionsLength(post.expressions) || null}
                </span>
              </div>
              <div className='interactive'>
                <div className='comment_length'>
                  {post.comments.length || 0} comments
                </div>

                <div className='comment_length'>
                  {post.shares.length || 0} shares
                </div>
              </div>
            </div>
            <hr />
            <div className='post_footer'>
              <div className='interactions_icons'>
                <div
                  className='interact expressions'
                  onClick={async () =>
                    await handleChangingExpressionForPost({
                      postId,
                      togglePostExpression,
                      index: postIndex,
                      emojiName,
                      refetch,
                    })
                  }
                >
                  {FindExpression({
                    expressions: post.expressions,
                  })}

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
                <div
                  className='interact comment'
                  onClick={() => ShowComments(postIndex)}
                >
                  <FontAwesomeIcon icon={faComment} />
                  <div className='identifier'>Comment</div>
                </div>

                <div
                  className='interact repost'
                  onClick={async () => {
                    post._id && (await sharePost({ postId: post._id }));
                    refetch();
                  }}
                >
                  <FontAwesomeIcon
                    icon={
                      post?.shares.indexOf(user._id) < 0
                        ? faRepeat
                        : faArrowRotateLeft
                    }
                  />
                  <div className='identifier'>
                    {post?.shares.indexOf(user._id) < 0 ? 'Repost' : 'Undo'}
                  </div>
                </div>
                <div
                  className='interact send'
                  onClick={async () => {
                    post._id && (await savePost({ postId: post._id }));
                    refetch();
                  }}
                >
                  <FontAwesomeIcon
                    icon={
                      post?.saves.indexOf(user?._id) < 0
                        ? regularBookMark
                        : solidBookMark
                    }
                  />
                  <div className='identifier'>
                    {post?.saves.indexOf(user?._id) < 0 ? 'Save' : 'UnSave'}
                  </div>
                </div>
              </div>

              <section className='post_comments'>
                <section className='comments'>
                  {user?._id && (
                    <section className='create_comment'>
                      <figure className='avatar'>
                        <img src={UserImage(user.avatar)} alt='User' />
                      </figure>

                      <div className='input'>
                        {postId && (
                          <CreateMessageForm
                            postId={postId}
                            uploadFunction={uploadCommentMessage}
                            visiblePrivacy={'public'}
                            refetch={refetch}
                            messageFor='comment'
                          />
                        )}
                      </div>
                    </section>
                  )}
                  {post.comments.map((comment, commentIndex) => (
                    <PostComment
                      isLoading={isLoading}
                      isSuccess={isSuccess}
                      postIndex={postIndex}
                      comment={comment}
                      commentIndex={commentIndex}
                      commentId={comment._id}
                      emojiName={emojiName}
                      refetch={refetch}
                      postId={post._id}
                      key={commentIndex}
                    />
                  ))}
                  {post.comments?.length > 2 && (
                    <div className='show_more_comments'>Load more comments</div>
                  )}
                </section>
              </section>
            </div>
          </>
        )
      )}
    </article>
  );
};

export default SinglePost;
