import Expressions from '../../types/Post/Expressions';
import VisiblePrivacy from '../../enums/VisiblePrivacy';
import User from '../User/User';
import Comment from './Comment';

interface Reply {
  _id: string;
  user: User;
  ref: Comment;
  reply: string;
  expressions: Expressions;
  visiblePrivacy: VisiblePrivacy;
}

export default Reply;
