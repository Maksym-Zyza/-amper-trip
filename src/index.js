import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'store/store';
import { PaginationProvider } from 'context';
import { App } from 'App';
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  // <React.StrictMode>
  <BrowserRouter basename="/camper-trip">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaginationProvider>
          <App />
        </PaginationProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
