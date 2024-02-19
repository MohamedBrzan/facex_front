import Image from '../Image/Image';
import User from '../User/User';

interface Album {
  _id?: string;
  user: User;
  title: string;
  description: string;
  images?: Image[];
}

export default Album;
