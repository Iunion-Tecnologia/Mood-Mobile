import React from 'react';
import {useSelector} from 'react-redux';
import {ApplicationState} from '../store';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {

  const auth = useSelector((state: ApplicationState) => state.auth);

  return auth.token ? <AppRoutes /> : <AuthRoutes />
}

export default Routes;
