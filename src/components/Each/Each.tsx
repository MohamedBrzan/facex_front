// import { Children } from 'react';
import { Children, ReactNode } from 'react';
import Post from '../../Interfaces/Post/Post';
import Blog from '../../Interfaces/Blog/Blog';
import Hashtag from '../../Interfaces/Hashtag/Hashtag';
import Job from '../../Interfaces/Job/Job';
import Loading from '../Loading/Loading';

type Props = {
  // render: (item: Post, index: number) => ReactElement;
  // of: [];
  isFetching: boolean;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  render: (item: Post, index: number) => ReactNode;
  of: Post | Blog | Hashtag | Job | undefined;
};

export const Each = ({
  isFetching,
  isLoading,
  isError,
  isSuccess,
  render,
  of,
}: Props) =>
  // Children.toArray(of.map((item: Post, index: number) => render(item, index)));
  isFetching ? (
    <Loading text='fetching...' />
  ) : isLoading ? (
    <Loading text='loading...' />
  ) : isError ? (
    <Loading text='error found while fetching.' />
  ) : isSuccess && of ? (
    Children.toArray(Object.values(of).map((key, index) => render(key, index)))
  ) : (
    'no data found'
  );
