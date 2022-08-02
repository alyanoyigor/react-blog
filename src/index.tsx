import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import App from './App';

import store from './store';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Can't find the root element");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter basename="/react-blog">
      <App />
    </BrowserRouter>
  </Provider>
);
