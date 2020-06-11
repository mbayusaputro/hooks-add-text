import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux';
import { PersistGate } from 'redux-persist/integration/react';

import Router from './routers';

export default () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}