import Album from '../Album/Album';
import User from '../User/User';

interface Video {
  _id?: string;
  user: User;
  video: Video;
  ref: Album;
}

export default Video;
