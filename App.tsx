import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/store';
import * as Updates from 'expo-updates';
import Routes from './src/routes';
import {
  useFonts,
  Rubik_400Regular,
  Rubik_300Light,
  Rubik_500Medium,
  Rubik_700Bold
} from '@expo-google-fonts/rubik';

export default function App() {

  useEffect(() => {
    async function updateApp(){
      const { isAvailable } = await Updates.checkForUpdateAsync()

      if(isAvailable){
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }
    updateApp();
  }, [])

  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_300Light,
    Rubik_500Medium,
    Rubik_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Provider store={store}>
        <StatusBar style="light" backgroundColor={'rgba(0,0,0,0.3)'} />
        <Routes />
      </Provider>
    </>
  )
}
