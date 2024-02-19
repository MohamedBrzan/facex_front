import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
  QueryActionCreatorResult,
  QueryDefinition,
} from '@reduxjs/toolkit/query';
import ReplyData from '../types/ReplyData';
import Reply from '../Interfaces/Comment/Reply';

export default async (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  _id: string,
  uploadReply: MutationTrigger<
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
  >,
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
      Reply,
      'ReplyApi'
    >
  >
) => {
  const target = e.target as HTMLImageElement;

  //* changing the icon
  target.parentElement?.parentElement?.parentElement?.firstElementChild?.firstElementChild?.setAttribute(
    'src',
    target.src
  );

  //* changing the name
  const theIdentifier = target.parentElement?.parentElement?.parentElement
    ?.children[1] as HTMLDivElement;
  const name = target.alt[0].toUpperCase() + target.alt.substring(1);

  theIdentifier.textContent = name;

  const data: ReplyData = { expressionKey: target.alt, replyId: _id };

  await uploadReply(data);

  refetch();
};
