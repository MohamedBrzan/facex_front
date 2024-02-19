import User from '../User/User';

interface Hashtag {
  _id?: string;
  user: User;
  text: string;
  followers: User[];
}

export default Hashtag;
