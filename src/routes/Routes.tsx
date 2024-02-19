import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import State from '../types/store/AuthSliceState';
import Home from '../pages/Home/Home';
import Jobs from '../pages/Jobs/Jobs';
import Messages from '../pages/Messages/Messages';
import Notifications from '../pages/Notifications/Notifications';
import Profile from '../pages/Profile/Profile';
import Admin from '../pages/Admin/Admin';
import CreateAd from '../crud/Ad/CreateAd';
import CreateArticle from '../crud/Article/Create/CreateArticle';
import CreateBlog from '../crud/Blog/CreateBlog';
import CreatePayment from '../crud/Payment/CreatePayment';
import CreateReel from '../crud/Reel/CreateReel';
import UploadPost from '../forms/UploadPost/UploadPost';
import SignUp from '../pages/Authentication/SignUp';
import SignIn from '../pages/Authentication/SignIn';
import Networks from '../pages/Networks/Networks';

const AppRoutes = () => {
  const { user } = useSelector((state: State) => state.Auth);
  return (
    <Routes>
      {user ? (
        <>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='/networks' element={<Networks />} />
            <Route path='/jobs' element={<Jobs />} />
            <Route path='/messages' element={<Messages />} />
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/me/profile' element={<Profile />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/user/:id' element={<Admin />} />
            //** Create Section **/
            <Route path='/create/'>
              <Route path='ad' element={<CreateAd />} />
              <Route path='article' element={<CreateArticle />} />
              <Route path='blog' element={<CreateBlog />} />
              <Route path='payment' element={<CreatePayment />} />
              <Route path='reel' element={<CreateReel />} />
            </Route>
            //** Upload Section ( for pages that have form for upload a topic )
            **/
            <Route path='/upload/'>
              <Route path='post' element={<UploadPost />} />
            </Route>
          </Route>
          <Route path='*' element={<Navigate replace to='/' />} />
        </>
      ) : (
        <>
          <Route path='/authentication/'>
            <Route index path='sign_in' element={<SignIn />} />
            <Route path='sign_up' element={<SignUp />} />{' '}
          </Route>
          <Route
            path='*'
            element={<Navigate replace to='/authentication/sign_in' />}
          />
        </>
      )}
    </Routes>
  );
};

export default AppRoutes;
