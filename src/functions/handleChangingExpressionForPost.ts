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
  index: number;
  emojiName: string;
  togglePostExpression: MutationTrigger<
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
      'PostApi'
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

const handleChangingExpressionForPost = async ({
  postId,
  emojiName,
  togglePostExpression,
  index,
  refetch,
}: Props) => {
  const ele = Array.from(document.querySelectorAll('.post_footer'))[index];

  const img = ele.firstElementChild?.firstElementChild?.firstElementChild
    ?.firstElementChild as HTMLImageElement;

  const condition = emojiName || img?.alt || 'like';

  const data = {
    expressionKey: condition,
    postId,
  };

  await togglePostExpression(data);
  emojiName = '';

  refetch();
};
export default handleChangingExpressionForPost;
