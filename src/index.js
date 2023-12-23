import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider
import store from './components/redux/store';// Import your Redux store
import './index.css';
import App from './App';

const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(
  <React.StrictMode>
    {/* Wrap App with Provider and pass the Redux store as a prop */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
