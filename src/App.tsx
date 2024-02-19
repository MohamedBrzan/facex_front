import { useSelector } from 'react-redux';
import Header from './views/Header/Header';
import State from './types/store/AuthSliceState';
import AppRoutes from './routes/Routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  const { user } = useSelector((state: State) => state.Auth);
  return (
    <>
      {user && <Header />}
      <main>
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
