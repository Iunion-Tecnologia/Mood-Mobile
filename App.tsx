import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/store';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar backgroundColor="#FFF" style="dark" />
        <Routes />
      </Provider>
    </>
  )
}
