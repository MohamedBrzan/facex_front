import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
  QueryActionCreatorResult,
  QueryDefinition,
} from '@reduxjs/toolkit/query';
import Post from '../Interfaces/Post/Post';
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';

type Props = {
  postId?: string;
  commentId?: string;
  commentIndex: number;
  replyId?: string;
  postIndex: number;
  emojiName: string;
  toggleCommentExpression: MutationTrigger<
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
      'CommentApi'
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
};

const handleChangingExpressionForComment = async ({
  postIndex,
  commentId,
  commentIndex,
  emojiName,
  toggleCommentExpression,
  refetch,
}: Props) => {
  const ele = Array.from(
    document.querySelectorAll('.post_footer .post_comments .comments ')
  )[postIndex].children[commentIndex + 1];

  const img = ele.firstElementChild?.lastElementChild?.children[1]?.children[1]
    ?.firstElementChild as HTMLImageElement;

  const condition = emojiName || img?.alt || 'like';

  img.setAttribute('alt', emojiName || 'like');

  const data = {
    expressionKey: condition,
    commentId,
  };
  await toggleCommentExpression(data);

  emojiName = '';

  refetch();
};
export default handleChangingExpressionForComment;
