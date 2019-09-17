import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonSplitPane } from '@ionic/react';

import Home from '../pages/Home/Home';
import List from '../pages/List/List';
import Details from '../pages/Details/Details';
import Menu from 'components/Menu/Menu';
import { getAppPages } from 'utils/utils';
import ActionsFab from 'components/ActionsFab/ActionsFab';

const AuthenticatedRoutes: React.FunctionComponent = () => {
  return (
    <>
      <ActionsFab></ActionsFab>
      <IonSplitPane contentId="main">
        <Menu appPages={getAppPages()} />
        <IonRouterOutlet id="main">
          <Route path="/home" component={Home} exact={true} />
          <Route path="/home/list" component={List} exact={true} />
          <Route path="/home/list/details/:id" component={Details} />
          <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>
      </IonSplitPane>
    </>
  );
};

export default AuthenticatedRoutes;
