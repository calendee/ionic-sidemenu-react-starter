import React, { useContext } from 'react';

import { UserContext } from '../providers/User/UserContextProvider';
import UnAuthenticatedRoutes from './UnauthenticatedRoutes';
import AuthenticatedRoutes from './AuthenticatedRoutes';

const Routes: React.FunctionComponent = () => {
  const { user } = useContext(UserContext);
  return user.uid ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />;
};

export default Routes;
