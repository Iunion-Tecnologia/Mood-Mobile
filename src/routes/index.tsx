import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../store';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';
import api from '../services/api';
import { login, logout } from '../store/ducks/auth/actions';
import { IRequest } from '../store/ducks/auth/types';
import AppLoading from 'expo-app-loading';
import Toast from 'react-native-toast-message';

const Routes: React.FC = () => {
  const auth = useSelector((state: ApplicationState) => state.auth);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const token = await AsyncStorage.getItem('@mood/token');
      const id = await AsyncStorage.getItem('@mood/id');

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      try {
        const response = await api.get(`user/profile/${id}`);
        dispatch(login({ user: response.data.user, token: token } as IRequest));
      } catch (error) {
        dispatch(logout());
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

  return auth.token ? (
    <AppRoutes />
  ) : (
    <>{isLoading ? <AppLoading /> : <AuthRoutes />}</>
  );
};

export default Routes;
