import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/store';
import * as Updates from 'expo-updates';
import Routes from './src/routes';

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

  return (
    <>
      <Provider store={store}>
        <StatusBar style="light" backgroundColor={'rgba(0,0,0,0.3)'} />
        <Routes />
      </Provider>
    </>
  )
}
