import Album from '../Album/Album';
import User from '../User/User';

interface Image {
  _id?: string;
  user: User;
  image: string;
  ref: Album;
}

export default Image;
