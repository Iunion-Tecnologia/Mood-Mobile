import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { CommentProvider } from './src/hooks/comment';
import store from './src/store';
import * as Updates from 'expo-updates';
import Routes from './src/routes';
import {
  useFonts,
  Rubik_400Regular,
  Rubik_300Light,
  Rubik_500Medium,
  Rubik_700Bold,
} from '@expo-google-fonts/rubik';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function App() {
  useEffect(() => {
    async function updateApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync();

      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }
    if (!__DEV__) updateApp();
  }, []);

  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_300Light,
    Rubik_500Medium,
    Rubik_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Provider store={store}>
        <CommentProvider>
          <StatusBar style="light" backgroundColor={'rgba(0,0,0,0.2)'} />
          <Routes />
        </CommentProvider>
      </Provider>
    </>
  );
}
