import Expressions from '../../types/Post/Expressions';
import PostStatus from '../../enums/PostStatus';
import Comment from '../Comment/Comment';
import User from '../User/User';
import VisiblePrivacy from '../../enums/VisiblePrivacy';

interface Blog {
  _id?: string;
  images?: string[];
  videos?: string[];
  title: string;
  content: string;
  status: PostStatus;
  user: User;
  views: User[];
  comments: Comment[];
  expressions: Expressions;
  visiblePrivacy: VisiblePrivacy;
}

export default Blog;
