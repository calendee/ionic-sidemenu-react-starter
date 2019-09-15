import React from 'react';
import { IonRouterOutlet } from '@ionic/react';

import { Route } from 'react-router';
import Login from '../pages/Login/Login';

const UnAuthenticatedRoutes: React.FunctionComponent = () => {
  return (
    <IonRouterOutlet>
      <Route path="/" component={Login} />
    </IonRouterOutlet>
  );
};

export default UnAuthenticatedRoutes;
