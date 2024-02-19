import { StrictMode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.scss';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import Loading from './components/Loading/Loading.tsx';

const element = document.getElementById('root');
createRoot(element!).render(
  <Suspense fallback={<Loading text='Loading' />}>
    <Provider store={store}>
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>
    </Provider>
  </Suspense>
);
