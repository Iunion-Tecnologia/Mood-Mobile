import React from 'react';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  return false ? <AppRoutes /> : <AuthRoutes />
}

export default Routes;
