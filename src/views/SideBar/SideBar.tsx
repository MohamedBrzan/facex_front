import FeedSideBar from './Helpers/FeedSideBar/FeedSideBar';
import RecentSideBar from './Helpers/RecentSideBar/RecentSideBar';
import './SideBar.scss';

const SideBar = () => {
  return (
    <section className='sidebar'>
      <FeedSideBar />
      <RecentSideBar />
    </section>
  );
};

export default SideBar;
