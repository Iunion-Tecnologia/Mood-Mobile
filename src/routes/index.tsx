import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {ApplicationState} from '../store';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';
import api from '../services/api';
import {login} from '../store/ducks/auth/actions';
import {IRequest} from '../store/ducks/auth/types';

const Routes: React.FC = () => {

  const auth = useSelector((state: ApplicationState) => state.auth);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    async function loadUser(){
      const token = await AsyncStorage.getItem('@mood/token');
      const id = await AsyncStorage.getItem('@mood/id');

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      try{
        const response = await api.get(`user/profile/${id}`);
        dispatch(login({user: response.data.user, token: token} as IRequest));
      }
      catch(error){
        console.log('>' + error.response.data.message);
        //Alert.alert(error.response.data.message);
      }
      setIsLoading(false);
    }

    loadUser();
  }, [])


  return auth.token ? <AppRoutes /> : <>{ !isLoading && <AuthRoutes />}</>
}

export default Routes;
