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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const token = await AsyncStorage.getItem('@mood/token');
      const user = await AsyncStorage.getItem('@mood/user');
      if (token && user) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        dispatch(login({ token: token, user: JSON.parse(user) }));
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  return auth.token ? (
    <AppRoutes />
  ) : (
    <>{loading ? <AppLoading /> : <AuthRoutes />}</>
  );
};

export default Routes;
