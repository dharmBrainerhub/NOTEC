import React from 'react';
import MianStack from './navigation/MianStack';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/Store';
import {PersistGate} from 'redux-persist/integration/react';

export default App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MianStack />
      </PersistGate>
    </Provider>
  );
};
