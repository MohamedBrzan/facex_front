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
  commentIndex: number;
  replyId?: string;
  replyIndex: number;
  postIndex: number;
  emojiName: string;
  toggleReplyExpression: MutationTrigger<
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
      'ReplyApi'
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

const handleChangingExpressionForReply = async ({
  postIndex,
  commentIndex,
  replyIndex,
  replyId,
  emojiName,
  toggleReplyExpression,
  refetch,
}: Props) => {
  const ele = Array.from(document.querySelectorAll('.comments'))[postIndex]
    .children[commentIndex + 1];

  // const identifier = ele.firstElementChild?.lastElementChild?.children[2]
  //   .children[replyIndex].firstElementChild?.lastElementChild?.lastElementChild
  //   ?.firstElementChild?.firstElementChild as HTMLDivElement;

  const img = ele.firstElementChild?.lastElementChild?.children[2].children[
    replyIndex
  ].firstElementChild?.lastElementChild?.lastElementChild?.children[1]
    .firstElementChild as HTMLImageElement;

  const condition = emojiName || img.alt || 'like';

  img.setAttribute('alt', emojiName || 'like');

  const data = {
    expressionKey: condition,
    replyId,
  };

  await toggleReplyExpression(data);
  emojiName = '';

  refetch();
};
export default handleChangingExpressionForReply;
