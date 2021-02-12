import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#FFF" style="dark" />
      <Routes />
    </>
  )
}
