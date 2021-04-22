import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import {useSelector} from 'react-redux';
import {ApplicationState} from '../store';
=======
import { useSelector } from 'react-redux';
import { ApplicationState } from '../store';
>>>>>>> release/v1.3.1
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';
import api from '../services/api';
<<<<<<< HEAD
import {login} from '../store/ducks/auth/actions';
import {IRequest} from '../store/ducks/auth/types';
=======
import { login, logout } from '../store/ducks/auth/actions';
import { IRequest } from '../store/ducks/auth/types';
import AppLoading from 'expo-app-loading';
import Toast from 'react-native-toast-message';
>>>>>>> release/v1.3.1

const Routes: React.FC = () => {
  const auth = useSelector((state: ApplicationState) => state.auth);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
<<<<<<< HEAD

  useEffect(() => {
    
    async function loadUser(){
      const token = await AsyncStorage.getItem('@mood/token');
      const id = await AsyncStorage.getItem('@mood/id');

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      try{
        const response = await api.get(`user/profile/${id}`);
        console.log(response.data);
        dispatch(login({user: response.data.user, token: token} as IRequest));
      }
      catch(error){
        console.log(error.response.data.message);
        //Alert.alert(error.response.data.message);
      }
      console.log(token,id);
      setIsLoading(false);   
    }

    loadUser();
  }, [])


  return auth.token ? <AppRoutes /> : <>{ !isLoading && <AuthRoutes />}</>
}
=======

  useEffect(() => {
    async function loadUser() {
      const token = await AsyncStorage.getItem('@mood/token');
      const id = await AsyncStorage.getItem('@mood/id');

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      try {
        if (token) {
          const response = await api.get(`user/profile/${id}`);
          dispatch(
            login({ user: response.data.user, token: token } as IRequest),
          );
        }
      } catch (error) {
        dispatch(logout());
        delete api.defaults.headers.common['Authorization'];
        await AsyncStorage.removeItem('@mood/token');
        await AsyncStorage.removeItem('@mood/id');
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Error - Sigin',
          text2: error.response.data.message,
          visibilityTime: 4000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
          onShow: () => {},
          onHide: () => {},
          onPress: () => {},
        });
      }
      setIsLoading(false);
    }

    loadUser();
  }, []);

  return auth.token ? <AppRoutes /> : <AuthRoutes />;
};
>>>>>>> release/v1.3.1

export default Routes;
